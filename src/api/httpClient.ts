import axios, { type AxiosError } from "axios";

// Normalized shape for every failure — components never see raw axios errors.
export class ApiError extends Error {
  status?: number;
  // A 404 fails identically on retry; a 500 or network blip might not.
  retryable: boolean;

  constructor(message: string, status?: number, retryable = true) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.retryable = retryable;
  }
}

function getFriendlyMessage(status: number): string {
  switch (status) {
    case 400:
      return "Invalid request.";
    case 401:
      return "You are not authorized to do this.";
    case 403:
      return "Access denied.";
    case 404:
      return "The requested resource was not found.";
    case 408:
      return "The request timed out.";
    case 429:
      return "Too many requests. Please try again shortly.";
    case 500:
    case 502:
    case 503:
    case 504:
      return "Something went wrong on the server. Please try again later.";
    default:
      return "Something went wrong. Please try again.";
  }
}

// 4xx (besides timeout/rate-limit) won't succeed on retry; 5xx and
// network errors might.
function isRetryableStatus(status?: number): boolean {
  if (status === undefined) return true; // network error / timeout
  if (status === 408 || status === 429) return true;
  return status >= 500;
}

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

// Normalizes every failure into an ApiError.
httpClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Let cancellations pass through so React Query can tell them apart
    // from real errors.
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    const status = error.response?.status;
    const serverMessage = (error.response?.data as { message?: string } | undefined)?.message;

    let message: string;
    if (serverMessage) {
      message = serverMessage;
    } else if (!error.response) {
      // No response at all: DNS failure, offline, CORS, or timeout.
      message =
        error.code === "ECONNABORTED"
          ? "The request timed out. Please try again."
          : "Network error. Please check your internet connection.";
    } else {
      message = getFriendlyMessage(status!);
    }

    return Promise.reject(new ApiError(message, status, isRetryableStatus(status)));
  },
);

export default httpClient;

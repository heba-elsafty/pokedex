import type { AxiosRequestConfig, Method } from "axios";
import httpClient from "./httpClient";

// Single generic entry point every feature api file  goes through, instead of calling httpClient directly.
// headers, response reshaping 

async function httpRequest<T>(
  url: string,
  method: Method = "GET",
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await httpClient.request<T>({
    url,
    method,
    ...config,
  });
  return response.data;
}

const apiClient = {
  httpRequest,
};

export default apiClient;

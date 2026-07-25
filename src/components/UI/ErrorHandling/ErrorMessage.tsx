import ErrorState from "./ErrorState";
import Button from "../Button";

interface Props {
  message?: string;
  status?: number;
  onRetry?: () => void;
  showRetry?: boolean;
}

export default function ErrorMessage({
  message = "Something went wrong.",
  status,
  onRetry,
  showRetry = true,
}: Props) {
  return (
    <ErrorState
      eyebrow="Something went wrong"
      code={status}
      title={message}
      action={
        showRetry &&
        onRetry && (
          <Button variant="primary" onClick={onRetry}>
            Retry
          </Button>
        )
      }
    />
  );
}

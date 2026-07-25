import type { ReactNode } from "react";

interface Props {
  image?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}

export default function EmptyState({
  image,
  title,
  description,
  action,
}: Props) {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-16">
      {image && <div className="mb-2">{image}</div>}
      <h2 className="text-2xl font-bold text-ink mt-4">{title}</h2>
      {description && (
        <p className="text-ink-muted mt-2 max-w-sm">{description}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

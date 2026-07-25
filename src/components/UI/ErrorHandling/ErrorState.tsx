import type { ReactNode } from "react";

interface Props {
  image?: ReactNode;
  eyebrow?: string;
  code?: string | number;
  title: string;
  description?: string;
  action?: ReactNode;
}

// Shared visual shell for every "error state" in the app — a routing 404,
// an API error, whatever comes next.

export default function ErrorState({
  image,
  eyebrow,
  code,
  title,
  description,
  action,
}: Props) {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-16">
      {image && <div className="mb-2">{image}</div>}
      {eyebrow && (
        <p className="text-sm font-semibold tracking-widest text-ink-subtle uppercase">
          {eyebrow}
        </p>
      )}
      {code !== undefined && (
        <h1 className="text-8xl font-bold text-ink-faint mt-2">{code}</h1>
      )}
      <h2 className="text-2xl font-bold text-ink mt-4">{title}</h2>
      {description && (
        <p className="text-ink-muted mt-2 max-w-sm">{description}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

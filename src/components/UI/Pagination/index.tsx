import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../Button";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ page, totalPages, onPageChange }: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(
    (p) => p === 1 || p === totalPages || Math.abs(p - page) <= 2,
  );

  return (
    <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
      <Button
        variant="outline"
        size="sm"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        <ChevronLeft size={16} /> Previous
      </Button>

      {pages.map((p, idx) => (
        <span key={p} className="flex items-center gap-2">
          {idx > 0 && pages[idx - 1] !== p - 1 && (
            <span className="px-1 text-ink-subtle">…</span>
          )}
          <Button
            variant="outline"
            size="sm"
            active={p === page}
            onClick={() => onPageChange(p)}
          >
            {p}
          </Button>
        </span>
      ))}

      <Button
        variant="outline"
        size="sm"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next <ChevronRight size={16} />
      </Button>
    </div>
  );
}

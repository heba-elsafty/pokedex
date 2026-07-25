export default function PokemonDetailsSkeleton() {
  return (
    <div className="mt-6 bg-surface rounded-panel shadow-sm overflow-hidden grid md:grid-cols-2 animate-pulse">
      <div className="flex items-center justify-center p-8 bg-muted">
        <div className="w-56 h-56 bg-placeholder rounded-full" />
      </div>

      <div className="p-8 text-left">
        <div className="h-6 w-32 bg-placeholder rounded" />

        <div className="flex gap-2 mt-3">
          <div className="h-6 w-16 bg-placeholder rounded-full" />
          <div className="h-6 w-16 bg-placeholder rounded-full" />
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6 max-w-xs">
          <div className="h-16 bg-placeholder rounded-control" />
          <div className="h-16 bg-placeholder rounded-control" />
          <div className="h-16 bg-placeholder rounded-control" />
        </div>

        <div className="h-16 bg-placeholder rounded-control mt-4 max-w-xs" />

        <div className="h-4 w-16 bg-placeholder rounded mt-6" />
        <div className="mt-4 max-w-xs space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>
              <div className="h-3 w-16 bg-placeholder rounded" />
              <div className="h-2 bg-placeholder rounded-full mt-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

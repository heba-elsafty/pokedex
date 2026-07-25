import type { PokemonStat } from "../../../../types/pokemon";

interface Props {
  stats: PokemonStat[];
}

const STAT_LABELS: Record<string, string> = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Atk",
  "special-defense": "Sp. Def",
  speed: "Speed",
};

// Base stats top out around 150-160 for non-legendaries — used just to size the bars, not a hard cap 
// (a higher stat still renders, just at 100%).
const MAX_STAT = 150;

// Get the color of the bar based on the percentage
function getBarColor(pct: number): string {
  if (pct < 33) return "bg-danger";
  if (pct < 66) return "bg-yellow-500";
  return "bg-green-500";
}

export default function PokemonStats({ stats }: Props) {
  return (
    <div className="mt-4 max-w-xs space-y-3">
      {stats.map((s) => {
        const pct = Math.min(100, (s.base_stat / MAX_STAT) * 100);
        return (
          <div key={s.stat.name}>
            <div className="flex items-center justify-between text-xs text-ink">
              <span>{STAT_LABELS[s.stat.name] ?? s.stat.name}</span>
              <span>{s.base_stat}</span>
            </div>
            <div className="mt-1 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${getBarColor(pct)}`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

import { Ruler, Volume2, Weight, Zap } from "lucide-react";
import { usePokemonDetail } from "../../hooks/usePokemonDetail";
import PokemonTypeBadge from "../../Pokemon/PokemonTypeBadge";
import PokemonStats from "../../Pokemon/PokemonStats";

export default function PokemonDetailCard({ name }: { name: string }) {
  const { data } = usePokemonDetail(name);

  return (
    <div className="mt-6 bg-surface rounded-panel shadow-sm overflow-hidden">
      <div className="bg-linear-to-r from-purple-600 to-pink-500 py-6 text-center">
        <h1 className="inline-flex items-center gap-2 text-2xl font-bold text-white capitalize">
          <Zap size={22} className="text-yellow-400" /> {data.name}
        </h1>
        <p className="flex items-center justify-center gap-2 text-white/80 text-sm mt-1">
          <span>#{data.id.toString().padStart(3, "0")}</span>
          {data.cries.latest && (
            <button
              type="button"
              aria-label={`Play ${data.name}'s cry`}
              onClick={() => new Audio(data.cries.latest!).play()}
              className="flex text-white/80 hover:text-white transition-colors"
            >
              <Volume2 size={16} />
            </button>
          )}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 p-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 rounded-full bg-background flex items-center justify-center">
            <img
              src={
                data.sprites.other?.["official-artwork"]?.front_default ??
                data.sprites.front_default ??
                undefined
              }
              alt={data.name}
              className="w-36 h-36 object-contain"
            />
          </div>

          <div className="flex gap-2 mt-4">
            {data.types.map((t) => (
              <PokemonTypeBadge key={t.type.name} type={t.type.name} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-xs text-left">
            <div className="bg-background rounded-control p-3">
              <p className="flex items-center gap-1 text-xs text-ink-subtle uppercase">
                <Ruler size={12} /> Height
              </p>
              <p className="font-semibold">{data.height / 10} m</p>
            </div>
            <div className="bg-background rounded-control p-3">
              <p className="flex items-center gap-1 text-xs text-ink-subtle uppercase">
                <Weight size={12} /> Weight
              </p>
              <p className="font-semibold">{data.weight / 10} kg</p>
            </div>
          </div>
        </div>

        <div className="text-left">
          <>
            <h3 className="text-sm font-bold text-ink uppercase tracking-wide">
              Base Stats
            </h3>
            <PokemonStats stats={data.stats} />
          </>

          <>
            <h3 className="text-sm font-bold text-ink uppercase tracking-wide mt-6">
              Abilities
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.abilities.map((a) => (
                <span
                  key={a.ability.name}
                  className="inline-block px-3 py-1 rounded-full bg-muted text-ink text-xs font-medium capitalize"
                >
                  {a.ability.name.replace("-", " ")}
                  {a.is_hidden ? " (Hidden)" : ""}
                </span>
              ))}
            </div>
          </>

          <>
            <h3 className="text-sm font-bold text-ink uppercase tracking-wide mt-6">
              Base Experience
            </h3>
            <p className="text-xl font-bold text-purple-600 mt-1">
              {data.base_experience ?? "—"} XP
            </p>
          </>
        </div>
      </div>
    </div>
  );
}

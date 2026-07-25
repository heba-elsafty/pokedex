import { useState } from "react";
import { Zap } from "lucide-react";
import PaginationView from "./Views/PaginationView";
import LoadMoreView from "./Views/LoadMoreView";
import { Button } from "@/components/UI";
import { clx } from "@/utils/helper";

type Mode = "pagination" | "load-more";

export default function Pokemons() {
  const [mode, setMode] = useState<Mode>("pagination");

  return (
    <div
      className={clx(
        "min-h-screen bg-linear-to-br",
        mode === "pagination"
          ? "from-blue-50 via-indigo-50 to-indigo-100"
          : "from-emerald-50 via-teal-50 to-emerald-100",
      )}
    >
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="inline-flex items-center gap-2 text-3xl font-bold">
            <Zap size={28} className="text-yellow-400" />
            Pokédex
          </h1>
          <p className="text-ink-muted mt-1">
            Discover and explore Pokémon with{" "}
            {mode === "pagination" ? "page controls" : "infinite scroll"}
          </p>

          <div className="mt-4 inline-flex bg-muted rounded-full p-1 gap-1">
            <Button
              variant={mode === "pagination" ? "primary" : "ghost"}
              size="sm"
              onClick={() => setMode("pagination")}
            >
              Page Controls
            </Button>
            <Button
              variant={mode === "load-more" ? "primary" : "ghost"}
              size="sm"
              onClick={() => setMode("load-more")}
            >
              Infinite Scroll
            </Button>
          </div>
        </header>

        {mode === "pagination" ? <PaginationView /> : <LoadMoreView />}
      </div>
    </div>
  );
}

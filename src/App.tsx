import { Routes, Route, Navigate } from "react-router";
import PokemonsPage from "./pages/Pokemons";
import PokemonDetailPage from "./pages/Pokemons/Pokemon";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokedex" replace />} />
      <Route path="/pokedex" element={<PokemonsPage />} />
      <Route path="/pokedex/:name" element={<PokemonDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

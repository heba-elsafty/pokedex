# Pokédex App

A responsive Pokémon browser built with React + TypeScript. Includes a paginated grid view, an infinite-scroll ("Load More") view, and a dedicated detail page per Pokémon — with Suspense-based loading and Error Boundary–based error handling throughout.

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router · TanStack Query (Suspense mode) · axios (with a central HTTP error interceptor) · react-error-boundary · lucide-react

## Running the Project Locally

```bash
yarn install
cp .env
yarn dev
```

It will open on http://localhost:5173/pokedex

## Production Build

```bash
yarn build
yarn preview
```

## Project Structure

```
src/
  api/               # axios client, HTTP error normalization, PokeAPI calls
  types/              # shared TypeScript interfaces (PokeAPI response shapes)
  constants/          # app-wide constants (e.g. default page size)
  utils/              # generic helpers (e.g. clx class-name joiner)
  styles/             # Tailwind v4 theme / design tokens
  components/
    UI/               # generic, reusable design-system primitives
                       # (Button, Badge, Card, Pagination, EmptyState,
                       #  ErrorState/ErrorMessage/NotFoundView, QueryBoundary)
    Pokemons/          # the Pokémon feature module
      hooks/           # React Query (suspense) hooks: list, infinite list, detail
      Pokemon/         # single-Pokémon domain: card, type badge, stats,
                       # not-found view, id/type-color constants
      Skeletons/       # loading skeletons matching each view's real layout
      Views/           # PaginationView, LoadMoreView
      index.tsx        # the Pokédex page (view switcher)
  pages/               # thin route-level wrappers around the components above
```

## Notable Implementation Details

- **Suspense + Error Boundaries**: data hooks use `useSuspenseQuery`/`useSuspenseInfiniteQuery`; a shared `QueryBoundary` component wires `Suspense` and `react-error-boundary` together with React Query's `QueryErrorResetBoundary`, so "Retry" actually clears the cached error before refetching.
- **Pagination without a loading flash**: page changes go through `useTransition`, so the previous page's data stays visible (dimmed) while the next page loads, instead of re-suspending.
- **404 vs. transient errors**: a 404 on a Pokémon lookup (doesn't exist) shows a dedicated illustrated "not found" state with no retry option; other errors (network, 5xx) show a generic error state with retry — mirrors the `ApiError.retryable` distinction already made at the HTTP layer.

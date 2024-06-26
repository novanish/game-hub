import { useGenres } from "./useGenres";

export function useGenre(genreId?: number) {
  const { data } = useGenres();

  return data.results.find((g) => g.id === genreId);
}

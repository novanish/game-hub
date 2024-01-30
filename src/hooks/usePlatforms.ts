import { useFetch } from "./useFetch";
import { Platform } from "./useGames";

export function usePlatforms() {
  const { data: platforms, ...rest } = useFetch<Platform>("/platforms");

  return { platforms, ...rest };
}

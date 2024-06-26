import { usePlatforms } from "./usePlatforms";

export function usePlatform(platformId?: number) {
  const { data } = usePlatforms();

  return data.results.find((p) => p.id === platformId);
}

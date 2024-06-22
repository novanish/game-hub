import platforms from "../data/platforms";

export function usePlatforms() {
  return { platforms, isLoading: false, error: null };
}

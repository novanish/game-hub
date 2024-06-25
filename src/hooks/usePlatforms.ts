import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { Platform } from "./useGames";
import { apiClient, type FetchResponse } from "../services/api-client";

export function usePlatforms() {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms")
        .then((res) => res.data),
    initialData: { count: platforms.length, results: platforms },
    staleTime: 24 * 60 * 60 * 1000, // 24 hour
  });
}

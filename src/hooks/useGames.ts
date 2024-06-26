import { type GameQuery } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: string;
  name: string;
  background_image?: string;
  parent_platforms: Array<{ platform: Platform }>;
  metacritic: number;
}

const apiClient = new APIClient<Game>("/games");

export function useGames(gameQuery: GameQuery) {
  const requestConfig = {
    genres: gameQuery.genreId,
    platforms: gameQuery.platformId,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText,
  };

  return useInfiniteQuery({
    queryKey: ["games", requestConfig],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({ params: { ...requestConfig, page: pageParam } }),
    staleTime: 10 * 60 * 1000, // 10m
    getNextPageParam(lastPage, allPages) {
      return lastPage.next === null ? undefined : allPages.length + 1;
    },
  });
}

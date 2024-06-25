import { type GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
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
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    },
  };

  return useQuery({
    queryKey: ["games", requestConfig],
    queryFn: () => apiClient.getAll(requestConfig),
    staleTime: 10 * 60 * 1000, // 10m
  });

  // const { data: games, ...rest } = useFetch<Game>("/games", requestConfig, [
  //   gameQuery,
  // ]);

  // return { games, ...rest };
}

import { useFetch } from "./useFetch";
import { type GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug:
    | "ios"
    | "mac"
    | "linux"
    | "pc"
    | "playstation"
    | "xbox"
    | "nintendo"
    | "android"
    | "web";
}

export interface Game {
  id: string;
  name: string;
  background_image: string | null;
  parent_platforms: Array<{ platform: Platform }>;
  metacritic: number;
}

export function useGames(gameQuery: GameQuery) {
  const requestConfig = {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
    },
  };

  const { data: games, ...rest } = useFetch<Game>("/games", requestConfig, [
    gameQuery,
  ]);

  return { games, ...rest };
}

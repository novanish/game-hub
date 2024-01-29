import { useFetch } from "./useFetch";

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
  background_image: string;
  parent_platforms: Array<{ platform: Platform }>;
  metacritic: number;
}

export function useGames() {
  const { data: games, ...rest } = useFetch<Game>("/games");

  return { games, ...rest };
}

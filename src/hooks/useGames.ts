import { useFetch } from "./useFetch";
import { type Genre } from "./useGenres";

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

export function useGames(
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) {
  const requestConfig = {
    params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id },
  };

  const { data: games, ...rest } = useFetch<Game>("/games", requestConfig, [
    selectedGenre?.id,
    selectedPlatform?.id,
  ]);

  return { games, ...rest };
}

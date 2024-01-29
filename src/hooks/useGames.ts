import { useEffect, useState } from "react";
import { apiClient } from "../services/api-client";
import { CanceledError } from "axios";

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

interface FetchGameResponse {
  count: number;
  results: Game[];
}

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
        console.log(response.data.results);
        setTimeout(() => setIsLoading(false), 2000);
        // setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;

        console.error(error);
        setError(error.message);
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { games, error, isLoading };
}

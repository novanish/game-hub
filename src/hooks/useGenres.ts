import { useEffect, useState } from "react";
import { apiClient } from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

export function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGenresResponse>("/genres", {
        signal: controller.signal,
      })
      .then((response) => {
        setGenres(response.data.results);
        // setTimeout(() => setIsLoading(false), 2000);
        setIsLoading(false);
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

  return { genres, error, isLoading };
}

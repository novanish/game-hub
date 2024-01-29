import { useEffect, useState } from "react";
import { apiClient } from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export function useFetch<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
      })
      .then((response) => {
        setData(response.data.results);
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
  }, [endpoint]);

  return { data, error, isLoading };
}

import { useEffect, useState } from "react";
import { apiClient } from "../services/api-client";
import { type AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export function useFetch<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps: React.DependencyList = []
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((response) => {
        setData(response.data.results);
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
  }, [endpoint, ...deps]);

  return { data, error, isLoading };
}

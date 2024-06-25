import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import { apiClient, type FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    initialData: { results: genres, count: genres.length },
    staleTime: 24 * 60 * 60 * 1000, // 24 hour
  });
}

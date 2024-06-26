import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import { APIClient } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

export function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    initialData: { results: genres, count: genres.length, next: "" },
    staleTime: 24 * 60 * 60 * 1000, // 24 hour
  });
}

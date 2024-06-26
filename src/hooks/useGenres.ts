import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import { APIClient } from "../services/api-client";
import ms from "ms";

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
    initialData: genres,
    staleTime: ms("24h"),
  });
}

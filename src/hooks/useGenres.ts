import { useFetch } from "./useFetch";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export function useGenres() {
  const { data: genres, ...rest } = useFetch<Genre>("/genres");

  return { genres, ...rest };
}

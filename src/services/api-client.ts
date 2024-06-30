import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

export const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d0fc97fbb8cd49c495f73d1278f39a5c",
  },
});

export class APIClient<T> {
  constructor(public endpoint: string) {}

  getAll = (config: AxiosRequestConfig) => {
    return apiClient
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: string | number) => {
    return apiClient.get<T>(this.endpoint + "/" + id).then((res) => res.data);
  };
}

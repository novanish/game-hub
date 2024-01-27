import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d0fc97fbb8cd49c495f73d1278f39a5c",
  },
});

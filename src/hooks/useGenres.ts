import { useQuery } from "@tanstack/react-query";
import { Genre } from "../services/genreService";
import { CACHE_KEY_GENRES } from "../constants";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default useGenres;

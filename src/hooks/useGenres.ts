import { useQuery } from "@tanstack/react-query";
import genreService, { Genre } from "../services/genreService";
import { CACHE_KEY_GENRES } from "../constants";

const useGenres = () =>
  useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default useGenres;

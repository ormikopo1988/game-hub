import { useQuery } from "@tanstack/react-query";
import genreService from "../services/genreService";
import { CACHE_KEY_GENRES } from "../constants";
import genres from "../data/genres";
import ms from "ms";

const useGenres = () =>
  useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: genreService.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;

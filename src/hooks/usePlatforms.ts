import platformService from "../services/platformService";
import { CACHE_KEY_PLATFORMS } from "../constants";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ms from "ms";

const usePlatforms = () =>
  useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: platformService.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;

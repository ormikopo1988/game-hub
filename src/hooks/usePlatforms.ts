import platformService from "../services/platformService";
import { CACHE_KEY_PLATFORMS } from "../constants";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";

const usePlatforms = () =>
  useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours,
    initialData: platforms,
  });

export default usePlatforms;

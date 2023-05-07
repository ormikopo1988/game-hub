import platformService, { Platform } from "../services/platformService";
import { CACHE_KEY_PLATFORMS } from "../constants";
import { useQuery } from "@tanstack/react-query";

const usePlatforms = () =>
  useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default usePlatforms;

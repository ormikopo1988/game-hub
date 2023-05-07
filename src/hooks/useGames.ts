import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { CACHE_KEY_GAMES } from "../constants";
import { FetchResponse } from "../services/api-client";
import gameService, { Game } from "../services/gameService";
import ms from "ms";

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });

export default useGames;

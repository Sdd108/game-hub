import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import type { GameQuery } from "@/store";
import APIClient, { type FetchResponse } from "@/services/api-client";
import type Game from "@/entities/Game";

const apiClient = new APIClient<Game>("/games");

const getPageFromUrl = (url: string | null): number | undefined => {
  if (!url) return undefined;

  const parsedUrl = new URL(url);
  const page = parsedUrl.searchParams.get("page");

  return page ? Number(page) : undefined;
};

const useInfiniteGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [
      "infinite-games",
      {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    ],

    queryFn: ({ signal, pageParam }) =>
      apiClient.getAll({
        signal,
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
          page_size: 20,
        },
      }),

    initialPageParam: 1,

    staleTime: ms("10mins"),

    placeholderData: keepPreviousData,

    getNextPageParam: (lastPage) => getPageFromUrl(lastPage.next),
  });

export default useInfiniteGames;

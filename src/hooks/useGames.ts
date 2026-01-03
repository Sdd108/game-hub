import { keepPreviousData, useQuery } from "@tanstack/react-query";
import ms from "ms";
import type { GameQuery } from "@/store";
import { type Platform } from "@/hooks/usePlatforms";
import APIClient, { type FetchResponse } from "@/services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description_raw: string;
}

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }],
  queryFn: ({ signal }) => apiClient.getAll({
    signal,
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }
  }),
  staleTime: ms("10mins"),
  placeholderData: keepPreviousData
})

export default useGames;
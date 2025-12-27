import type { GameQuery } from "@/App";
import { type Platform } from "@/hooks/usePlatforms";
import apiClient, { type FetchResponse } from "@/services/api-client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number
}

// const useGames1 = (gameQuery: GameQuery) =>
//   useData<Game>('/games', {
//     params: {
//       genres: gameQuery.genre?.id,
//       platforms: gameQuery.platform?.id,
//       ordering: gameQuery.sortOrder,
//       search: gameQuery.searchText
//     }}, [gameQuery])

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }],
  queryFn: ({ signal }) => apiClient.get<FetchResponse<Game>>('/games', {
    signal,
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }
  }).then(res => res.data),
  staleTime: 1000 * 60 * 10, // 10mins
  placeholderData: keepPreviousData
})

export default useGames;
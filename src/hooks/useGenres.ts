import genres from "@/components/data/genres";
import apiClient, { type FetchResponse } from "@/services/api-client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string
}

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
  staleTime: 1000 * 60 * 60 * 24,  // 24 hours
  placeholderData: keepPreviousData,
  initialData: genres
});

export default useGenres;
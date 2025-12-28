import ms from "ms";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import genres from "@/components/data/genres";
import APIClient from "@/services/api-client";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string
}

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: ms("24h"),
  placeholderData: keepPreviousData,
  initialData: genres
});

export default useGenres;
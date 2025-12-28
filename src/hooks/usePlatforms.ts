import { keepPreviousData, useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "@/components/data/platforms";
import APIClient from "@/services/api-client";

export interface Platform {
  id: number,
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: ms("24h"),
  placeholderData: keepPreviousData,
  initialData: platforms
});

export default usePlatforms;

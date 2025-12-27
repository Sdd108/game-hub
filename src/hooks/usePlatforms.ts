import platforms from "@/components/data/platforms";
import APIClient from "@/services/api-client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number,
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: 1000 * 60 * 60 * 24,  // 24 hours
  placeholderData: keepPreviousData,
  initialData: platforms
});

export default usePlatforms;

import apiClient from "@/services/api-client";
import { type FetchResponse } from "./useData";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import platforms from "@/components/data/platforms";

interface Platform {
  id: number,
  name: string;
  slug: string;
}

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
  staleTime: 1000 * 60 * 60 * 24,  // 24 hours
  placeholderData: keepPreviousData,
  initialData: platforms
});

export default usePlatforms;

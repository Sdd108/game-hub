import ms from "ms";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import genres from "@/components/data/genres";
import APIClient from "@/services/api-client";
import type Genre from "@/entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    placeholderData: keepPreviousData,
    initialData: genres,
  });

export default useGenres;

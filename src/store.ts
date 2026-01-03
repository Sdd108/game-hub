import { create } from "zustand";

import type Platform from "@/entities/Platform";
import type Genre from "@/entities/Genre";

export interface GameQuery {
  genre?: Genre;
  platform?: Platform;
  sortOrder?: string;
  searchText?: string;
  page?: number;
  page_size?: number;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenre: (genre?: Genre) => void;
  setPlatform: (platform?: Platform) => void;
  setSortOrder: (sortOrder?: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenre: (genre) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genre } })),
  setPlatform: (platform) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platform } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;

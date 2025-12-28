import { type Platform } from "@/hooks/usePlatforms";
import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import GameGridInfinite from "./components/GameGridInfinite";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import type { Genre } from "./hooks/useGenres";

export interface GameQuery {
  genre?: Genre;
  platform?: Platform;
  sortOrder?: string;
  searchText: string;
  page?: number;
  page_size?: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {/* NavBar */}
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      {/* Genres */}
      <GridItem hideBelow="lg" area="aside" paddingX={5} marginY={7}>
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>

      {/* Main Layout */}
      <GridItem area="main">
        <Box paddingLeft={3}>
          <GameHeading gameQuery={gameQuery} />
          <HStack gap={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GameGridInfinite gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;

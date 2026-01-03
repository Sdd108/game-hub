import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import GameGridInfinite from "./components/GameGridInfinite";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
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
        <NavBar />
      </GridItem>

      {/* Genres */}
      <GridItem hideBelow="lg" area="aside" paddingX={5} marginY={7}>
        <GenreList />
      </GridItem>

      {/* Main Layout */}
      <GridItem area="main">
        <Box paddingLeft={3}>
          <GameHeading />
          <HStack gap={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGridInfinite />
      </GridItem>
    </Grid>
  );
}

export default App;

import GameGridInfinite from "@/components/GameGridInfinite";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { Grid, GridItem, Box, HStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
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
};

export default HomePage;

import type { GameQuery } from "@/App";
import useInfiniteGames from "@/hooks/useInfiniteGames";
import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 6 }}
      padding="10px"
      gap={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page?.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </React.Fragment>
      ))}
      <Button
        disabled={isFetchingNextPage}
        className="btn btn-primary"
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </Button>
    </SimpleGrid>
  );
};

export default GameGrid;

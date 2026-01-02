import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const platform = useGameQueryStore((s) => s.gameQuery.platform);
  const genre = useGameQueryStore((s) => s.gameQuery.genre);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={6} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;

import type Game from "@/entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid as="dl" columns={2}>
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>

      <DefinitionItem term="Genre">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Publishers">
        {game.publishers?.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;

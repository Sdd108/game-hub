import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import useGameQueryStore from "@/store";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const setSelectedGenre = useGameQueryStore((s) => s.setGenre);
  const selectedGenre = useGameQueryStore((s) => s.gameQuery.genre);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="xl" marginBottom={2}>
        Genres
      </Heading>
      <List.Root unstyled>
        <List.Item key={0} paddingY="5px">
          <HStack>
            <IoHome />
            <Button
              fontWeight={!selectedGenre ? "bold" : "normal"}
              onClick={() => setSelectedGenre(undefined)}
              fontSize="lg"
              variant="ghost"
            >
              All
            </Button>
          </HStack>
        </List.Item>
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => setSelectedGenre(genre)}
                fontSize="lg"
                variant="ghost"
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;

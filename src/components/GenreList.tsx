import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { IoHome } from "react-icons/io5";
import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List.Root unstyled>
      <List.Item key={0} paddingY="5px">
        <HStack>
          <IoHome />
          <Button
            fontWeight={selectedGenre ? "bold" : "normal"}
            onClick={() => onSelectGenre(null)}
            fontSize="lg"
            variant="ghost"
          >
            All
          </Button>
        </HStack>
      </List.Item>
      {genres.map((genre) => (
        <List.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="ghost"
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;

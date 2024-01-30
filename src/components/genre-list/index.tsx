import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { type Genre, useGenres } from "../../hooks/useGenres";
import { getCroppedImageUrl } from "../../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
export function GenreList({ onSelectGenre }: Props) {
  const { genres, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} py="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              borderRadius={8}
              boxSize="32px"
              loading="lazy"
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

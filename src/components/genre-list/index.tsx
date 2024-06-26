import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { useGenres } from "../../hooks/useGenres";
import { getCroppedImageUrl } from "../../services/image-url";

interface Props {
  onSelectGenre: (genreId: number) => void;
  selectedGenreId: number | undefined;
}
export function GenreList({ onSelectGenre, selectedGenreId }: Props) {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>
      <List>
        {genres.results.map((genre) => (
          <ListItem key={genre.id} py="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                borderRadius={8}
                boxSize="32px"
                loading="lazy"
                objectFit="cover"
              />
              <Button
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre.id)}
                variant="link"
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

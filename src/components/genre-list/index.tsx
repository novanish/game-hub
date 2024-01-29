import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import { useGenres } from "../../hooks/useGenres";
import { getCroppedImageUrl } from "../../services/image-url";

export function GenreList() {
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
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

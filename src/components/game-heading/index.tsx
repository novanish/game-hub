import { Heading } from "@chakra-ui/react";
import { type GameQuery } from "../../App";
import { useGenres } from "../../hooks/useGenres";
import { usePlatforms } from "../../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

export function GameHeading({ gameQuery: { platformId, genreId } }: Props) {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = genres?.results.find((g) => g.id === genreId);
  const platform = platforms?.results.find((p) => p.id === platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="5xl" mb={5}>
      {heading}
    </Heading>
  );
}

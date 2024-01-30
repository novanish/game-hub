import { Heading } from "@chakra-ui/react";
import { type GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

export function GameHeading({ gameQuery: { platform, genre } }: Props) {
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="5xl" mb={5}>
      {heading}
    </Heading>
  );
}

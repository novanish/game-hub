import { Card, CardBody, Image, Heading } from "@chakra-ui/react";
import { type Game } from "../../hooks/useGames";
import { PlatFormIconList } from "../platform-icon-list";

interface Props {
  game: Game;
}

export default function GameCard({
  game: { background_image, name, parent_platforms },
}: Props) {
  return (
    <Card maxW="303px" mx={"auto"} borderRadius={10} overflow="hidden">
      <Image
        objectFit={"cover"}
        src={background_image}
        alt={name}
        loading="lazy"
      />
      <CardBody>
        <Heading fontSize="xl" mt="6">
          {name}
        </Heading>
        <PlatFormIconList
          platforms={parent_platforms.map(({ platform }) => platform)}
        />
      </CardBody>
    </Card>
  );
}

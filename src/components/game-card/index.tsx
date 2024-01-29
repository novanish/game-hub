import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import { type Game } from "../../hooks/useGames";
import { PlatFormIconList } from "../platform-icon-list";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

export default function GameCard({
  game: { background_image, name, parent_platforms, metacritic },
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
        <HStack justifyContent="space-between" >
          <PlatFormIconList
            platforms={parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import { type Game } from "../../hooks/useGames";
import { PlatFormIconList } from "../platform-icon-list";
import CriticScore from "./CriticScore";
import { getCroppedImageUrl } from "../../services/image-url";
interface Props {
  game: Game;
}

export function GameCard({
  game: { background_image, name, parent_platforms, metacritic },
}: Props) {
  return (
    <Card>
      <Image
        objectFit={"cover"}
        src={getCroppedImageUrl(background_image)}
        alt={name}
        loading="lazy"
      />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatFormIconList
            platforms={parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
        <Heading fontSize="xl" mt="6">
          {name}
        </Heading>
      </CardBody>
    </Card>
  );
}

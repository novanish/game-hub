import { SimpleGrid } from "@chakra-ui/react";
import { GameCard } from "../game-card";
import { GameCardSkeleton } from "../game-card/GameCardSkeleton";
import { GameCardContainer } from "../game-card/GameCardContainer";
import { useGames } from "../../hooks/useGames";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

export function GameGrid({ gameQuery }: Props) {
  const { data, isLoading } = useGames(gameQuery);
  const skeletonCardCount = 6;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
      {isLoading
        ? Array.from({ length: skeletonCardCount }, (_, i) => (
            <GameCardContainer key={i}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))
        : data?.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
    </SimpleGrid>
  );
}

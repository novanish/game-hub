import { SimpleGrid } from "@chakra-ui/react";
import { useGames } from "../../hooks/useGames";
import { GameCard } from "../game-card";
import { GameCardSkeleton } from "../game-card/GameCardSkeleton";
import GameCardContainer from "../game-card/GameCardContainer";

export function GameGrid() {
  const { games, isLoading } = useGames();
  const skeletonCardCount = 6;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
      {isLoading
        ? Array.from({ length: skeletonCardCount }, (_, i) => (
            <GameCardContainer key={i}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))
        : games.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
    </SimpleGrid>
  );
}

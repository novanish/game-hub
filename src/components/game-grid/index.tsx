import { SimpleGrid } from "@chakra-ui/react";
import { useGames } from "../../hooks/useGames";
import { GameCard } from "../game-card";
import { GameCardSkeleton } from "../game-card/GameCardSkeleton";

export function GameGrid() {
  const { games, isLoading } = useGames();
  const skeletonCardCount = 6;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding="2rem">
      {isLoading
        ? Array.from({ length: skeletonCardCount }, (_, i) => (
            <GameCardSkeleton key={i} />
          ))
        : games.map((game) => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  );
}

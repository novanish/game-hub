import { SimpleGrid } from "@chakra-ui/react";
import { useGames } from "../../hooks/useGames";
import GameCard from "../game-card";

export function GameGrid() {
  const { games } = useGames();

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding="2rem">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
}

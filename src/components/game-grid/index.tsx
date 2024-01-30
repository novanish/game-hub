import { SimpleGrid } from "@chakra-ui/react";
import { useGames } from "../../hooks/useGames";
import { GameCard } from "../game-card";
import { GameCardSkeleton } from "../game-card/GameCardSkeleton";
import GameCardContainer from "../game-card/GameCardContainer";
import { type Genre } from "../../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

export function GameGrid({ selectedGenre }: Props) {
  const { games, isLoading } = useGames(selectedGenre);
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

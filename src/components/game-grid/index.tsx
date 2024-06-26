import { SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../../App";
import { useGames } from "../../hooks/useGames";
import { GameCard } from "../game-card";
import { GameCardContainer } from "../game-card/GameCardContainer";
import { GameCardSkeleton } from "../game-card/GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

export function GameGrid({ gameQuery }: Props) {
  const { data, isLoading, hasNextPage, fetchNextPage } = useGames(gameQuery);
  const skeletonCardCount = 6;

  const dataLength =
    data?.pages.reduce((total, page) => total + page.results.length, 0) ?? 0;

  return (
    <InfiniteScroll
      dataLength={dataLength}
      hasMore={Boolean(hasNextPage)}
      loader={<Spinner />}
      next={fetchNextPage}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {isLoading
          ? Array.from({ length: skeletonCardCount }, (_, i) => (
              <GameCardContainer key={i}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))
          : data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => {
                  return (
                    <GameCardContainer key={game.id}>
                      <GameCard game={game} />
                    </GameCardContainer>
                  );
                })}
              </React.Fragment>
            ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
}

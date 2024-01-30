import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Navbar } from "./components/navbar";
import { GameGrid } from "./components/game-grid";
import { GenreList } from "./components/genre-list";
import { useState } from "react";
import { PlatformSelector } from "./components/platform-selector";
import { type Genre } from "./hooks/useGenres";
import { type Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

export default function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
  });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "177px 1fr",
      }}
      gap={10}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" px={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) =>
              setGameQuery((prevGameQuery) => ({ ...prevGameQuery, genre }))
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery((prevGameQuery) => ({ ...prevGameQuery, platform }))
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

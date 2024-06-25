import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { Navbar } from "./components/navbar";
import { GameGrid } from "./components/game-grid";
import { GenreList } from "./components/genre-list";
import { useState } from "react";
import { PlatformSelector } from "./components/platform-selector";
import { type Genre } from "./hooks/useGenres";
import { type Platform } from "./hooks/usePlatforms";
import { SortSelector } from "./components/sort-selector";
import { GameHeading } from "./components/game-heading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

export default function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
    searchText: "",
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
        <Navbar
          onSearch={(searchText) =>
            setGameQuery((prevGameQuery) => ({ ...prevGameQuery, searchText }))
          }
        />
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
        <Box padding={2}>
          <GameHeading gameQuery={gameQuery} />

          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery((prevGameQuery) => ({
                  ...prevGameQuery,
                  platform,
                }))
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery((prevGameQuery) => ({
                  ...prevGameQuery,
                  sortOrder,
                }))
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

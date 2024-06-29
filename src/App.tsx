import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { GameGrid } from "./components/game-grid";
import { GameHeading } from "./components/game-heading";
import { GenreList } from "./components/genre-list";
import { Navbar } from "./components/navbar";
import { PlatformSelector } from "./components/platform-selector";
import { SortSelector } from "./components/sort-selector";

export default function App() {
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
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box padding={2}>
          <GameHeading />

          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

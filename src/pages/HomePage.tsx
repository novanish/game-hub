import { Grid, Show, GridItem, Box, HStack } from "@chakra-ui/react";
import { GameGrid } from "../components/game-grid";
import { GameHeading } from "../components/game-heading";
import { GenreList } from "../components/genre-list";
import { PlatformSelector } from "../components/platform-selector";
import { SortSelector } from "../components/sort-selector";

export default function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "177px 1fr",
      }}
      gap={10}
    >
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

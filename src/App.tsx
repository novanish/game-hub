import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Navbar } from "./components/navbar";
import { GameGrid } from "./components/game-grid";
import { GenreList } from "./components/genre-list";

export default function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gap={10}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Navbar } from "./components/navbar";

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
        <GridItem area="aside" bg="gold">
          2
        </GridItem>
      </Show>
      <GridItem area="main" bg="palegreen">
        3
      </GridItem>
    </Grid>
  );
}

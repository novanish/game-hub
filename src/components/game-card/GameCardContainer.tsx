import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export default function GameCardContainer({ children }: Props) {
  return (
    <Box maxW="300px" mx="auto" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}

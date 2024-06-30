import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Box padding={5}>
      <Heading>Oops</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This Page doesn't exist"
          : "An unexpected error occur."}
      </Text>
    </Box>
  );
}

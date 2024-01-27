import { HStack, Image, Input, Switch } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";

export function Navbar() {
  return (
    <nav>
      <HStack gap={7} p={4}>
        <Image src={logo} alt="logo" boxSize="60px" />
        <Input
          rounded="full"
          px={5}
          placeholder="Search games"
          aria-label="search"
          enterKeyHint="search"
          spellCheck={false}
        />
        <Switch id="email-alerts" size="lg" />
      </HStack>
    </nav>
  );
}

import { HStack, Image, Switch, Text, useColorMode } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { SearchInput } from "./SearchInput";
import { Link } from "react-router-dom";

export function Navbar() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <nav>
      <HStack gap={7} p={4}>
        <Link to="/">
          <Image src={logo} alt="logo" boxSize="60px" objectFit="cover" />
        </Link>
        <SearchInput />
        <HStack>
          <Switch
            id="email-alerts"
            size="lg"
            onChange={toggleColorMode}
            isChecked={colorMode === "dark"}
          />
          <Text>{colorMode === "dark" ? "Dark" : "Light"} Mode</Text>
        </HStack>
      </HStack>
    </nav>
  );
}

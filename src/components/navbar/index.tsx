import { HStack, Image, Switch, Text, useColorMode } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { SearchInput } from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}
export function Navbar({ onSearch }: Props) {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <nav>
      <HStack gap={7} p={4}>
        <Image src={logo} alt="logo" boxSize="60px" />
        <SearchInput onSearch={onSearch} />
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

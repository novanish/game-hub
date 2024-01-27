import {
  HStack,
  Image,
  Input,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../../assets/logo.webp";

export function Navbar() {
  const { toggleColorMode, colorMode } = useColorMode();
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

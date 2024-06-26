import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import { usePlatforms } from "../../hooks/usePlatforms";
import { usePlatform } from "../../hooks/usePlatform";

interface Props {
  onSelectPlatform: (platformId: number) => void;
  selectedPlatformId: number | undefined;
}

export function PlatformSelector({
  onSelectPlatform,
  selectedPlatformId,
}: Props) {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronRight />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

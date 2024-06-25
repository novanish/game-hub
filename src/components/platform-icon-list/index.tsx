import { type Platform } from "../../hooks/usePlatforms";
import {
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaWindows,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { type IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

type PlatformIcon = {
  [K in Platform["slug"]]: IconType;
};

export function PlatFormIconList({ platforms }: Props) {
  const iconMap: PlatformIcon = {
    pc: FaWindows,
    ios: MdPhoneIphone,
    mac: FaApple,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  return (
    <HStack mt="4">
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform["slug"]]}
          color="gray.500"
          w={5}
          h={5}
        />
      ))}
    </HStack>
  );
}

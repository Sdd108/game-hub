import { type Platform } from "@/hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { HiQuestionMarkCircle } from "react-icons/hi2";
import { MdPhoneIphone } from "react-icons/md";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    playstation2: FaPlaystation,
    playstation3: FaPlaystation,
    playstation4: FaPlaystation,
    playstation5: FaPlaystation,
    xbox: FaXbox,
    "xbox-old": FaXbox,
    "xbox-one": FaXbox,
    "xbox-series-x": FaXbox,
    xbox360: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={
            iconMap[platform.slug]
              ? iconMap[platform.slug]
              : HiQuestionMarkCircle
          }
          color="gray.500"
          boxSize={5}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;

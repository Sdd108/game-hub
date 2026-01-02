import logo from "@/assets/logo.webp";
import { ColorModeButton } from "@/components/ui/color-mode";
import { HStack, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px" gap={15}>
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;

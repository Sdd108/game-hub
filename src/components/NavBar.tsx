import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import logo from "@/assets/logo.webp";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;

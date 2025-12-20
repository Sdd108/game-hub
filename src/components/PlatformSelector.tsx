import type { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Menu, Button, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "Platforms"}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item onClick={() => onSelectPlatform(null)} key={0} value="">
              All Platforms
            </Menu.Item>
            <Menu.Separator />
            {platforms.map((p) => (
              <Menu.Item
                onClick={() => onSelectPlatform(p)}
                key={p.id}
                value={p.slug}
              >
                {p.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;

import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const selectedPlatform = useGameQueryStore((s) => s.gameQuery.platform);
  const onSelectPlatform = useGameQueryStore((s) => s.setPlatform);

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
            <Menu.Item
              onClick={() => onSelectPlatform(undefined)}
              key={0}
              value=""
            >
              All Platforms
            </Menu.Item>
            <Menu.Separator />
            {data?.results.map((p) => (
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

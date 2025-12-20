import { Menu, Button, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by: Relevance
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="">Relevance</Menu.Item>
            <Menu.Item value="">Date added</Menu.Item>
            <Menu.Item value="">Name</Menu.Item>
            <Menu.Item value="">Release date</Menu.Item>
            <Menu.Item value="">Popularity</Menu.Item>
            <Menu.Item value="">Average rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;

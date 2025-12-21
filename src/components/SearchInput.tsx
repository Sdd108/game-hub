import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch />}>
      <Input
        borderRadius="full"
        placeholder="Search games..."
        variant="subtle"
      />
    </InputGroup>
  ); // todo figure how to do borderRadius using Chakra UI v3
};

export default SearchInput;

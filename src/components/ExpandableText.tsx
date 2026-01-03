import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  max_length?: number;
}

const ExpandableText = ({ children, max_length = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= max_length) return <Text>{children}</Text>;

  const summary = expanded
    ? children
    : children.substring(0, max_length) + "...";

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="bold"
        colorPalette="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;

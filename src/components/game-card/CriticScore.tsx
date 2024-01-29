import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export default function CriticScore({ score }: Props) {
  const color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize="14px" px={2} borderRadius="4px">
      {score}
    </Badge>
  );
}

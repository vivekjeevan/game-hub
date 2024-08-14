import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  critictScore: number;
}

const CritictScore = ({ critictScore }: Props) => {
  let color = critictScore > 75 ? "green" : critictScore > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize={15} paddingX={2} borderRadius={4}>
      {critictScore}
    </Badge>
  );
};

export default CritictScore;

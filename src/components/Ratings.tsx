import meh from "../assets/meh.webp";
import bullseye from "../assets/bulls-eye.webp";
import thumsup from "../assets/thumbsup.webp";
import { FaStar } from "react-icons/fa";
import { Heading, HStack, Icon, Image, Text } from "@chakra-ui/react";

interface Props {
  ratings: number;
}

const Ratings = ({ ratings }: Props) => {
  if (ratings < 3) return null;

  return (
    <>
      <HStack marginTop={4}>
        {[...Array(ratings)].map((i) => (
          <Icon key={i} as={FaStar} color="gold" />
        ))}
      </HStack>
    </>
  );
};

export default Ratings;

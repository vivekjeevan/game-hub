import useGenres, { Genres } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genres) => void;
}

const GenresList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (isLoading) return <Spinner></Spinner>;
  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button onClick={() => onSelectGenre(genre)} variant="link">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;

import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatforms: (platform: platform | null) => void;
  selectedPlatform: platform | null;
}

const PlatformList = ({ selectedPlatform, onSelectPlatforms }: Props) => {
  const { data } = usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform === null ? "platform" : selectedPlatform.name}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatforms(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformList;

import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatforms: (platform: Platform) => void;
  selectedPlatform: Platform;
}

const PlatformList = ({ selectedPlatform, onSelectPlatforms }: Props) => {
  const { data } = usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "platform"}
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

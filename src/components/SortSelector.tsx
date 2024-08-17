import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: Relavence
      </MenuButton>
      <MenuList>
        <MenuItem>Name</MenuItem>
        <MenuItem>Date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Ratings</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

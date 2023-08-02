import { HStack, useColorMode, Text, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
      />
    </HStack>
  );
};

export default ColorModeSwitch;

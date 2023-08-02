import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  Spacer,
  useDisclosure,
  Drawer,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaBars } from "react-icons/fa";
import NavDrawer from "./NavDrawer";
const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  return (
    <Flex bg="gray.500" p={4} color="white" alignItems="center">
      <Box m={2}>Logo</Box>
      <ColorModeSwitch />
      <Spacer />
      {isSmallScreen ? (
        <>
          <NavDrawer isOpen={isOpen} onClose={onClose} />
          <IconButton
            aria-label="Open navigation menu"
            icon={<FaBars />}
            onClick={onOpen}
          />
        </>
      ) : (
        <Flex>
          <ChakraLink
            as={Link}
            to="/"
            m={2}
            _hover={{ textDecoration: "none" }}
          >
            Home
          </ChakraLink>

          <ChakraLink
            as={Link}
            to="/apartment"
            m={2}
            _hover={{ textDecoration: "none" }}
          >
            Apartment
          </ChakraLink>

          <ChakraLink
            as={Link}
            to="/about"
            m={2}
            _hover={{ textDecoration: "none" }}
          >
            About
          </ChakraLink>

          <ChakraLink
            as={Link}
            to="/login"
            m={2}
            _hover={{ textDecoration: "none" }}
          >
            Login
          </ChakraLink>

          <ChakraLink
            as={Link}
            to="/signup"
            m={2}
            _hover={{ textDecoration: "none" }}
          >
            Signup
          </ChakraLink>
        </Flex>
      )}
    </Flex>
  );
};

export default NavBar;

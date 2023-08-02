import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link as ChakraLink,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavDrawer = ({ isOpen, onClose }: NavDrawerProps) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>HomeFinder</DrawerHeader>

          <DrawerBody>
            <Box mb={4}>
              <ChakraLink as={Link} to="/" onClick={onClose}>
                Home
              </ChakraLink>
            </Box>

            <Box mb={4}>
              <ChakraLink as={Link} to="/apartment" onClick={onClose}>
                Apartment
              </ChakraLink>
            </Box>

            <Box mb={4}>
              <ChakraLink as={Link} to="/about" onClick={onClose}>
                About
              </ChakraLink>
            </Box>

            <Box mb={4}>
              <ChakraLink as={Link} to="/login" onClick={onClose}>
                Login
              </ChakraLink>
            </Box>
            <Box mb={4}>
              <ChakraLink as={Link} to="/signup" onClick={onClose}>
                Signup
              </ChakraLink>
            </Box>
            {/* Add additional links here */}
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavDrawer;

import { Box, Flex, useColorModeValue, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Text, Button } from '@chakra-ui/react';
import { FaSearch } from "react-icons/fa";
import React from 'react'
import Search from './Search';

const Header = () => {
  return (
        <Box
          bg={useColorModeValue("blue.400", "blue.800")}
          w="full"
          p={6}
          color="white"
        >
          <Heading size="2xl" mb={3}>
            Welcome to GeoHomeFinder!
          </Heading>
          <Text fontSize="xl">
            Revolutionizing your house-hunting experience. Find your dream home
            at your fingertips!
          </Text>
         <Search/>
        </Box>
  );
}

export default Header
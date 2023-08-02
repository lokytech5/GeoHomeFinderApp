import { Box, Link, Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

const Footer = () => {
  return (
    <Box w="full" p={5} bg={useColorModeValue("blue.400", "blue.800")}>
      <Stack direction="row" spacing={10}>
        <Link color="white">About Us</Link>
        <Link color="white">Contact Us</Link>
        <Link color="white">Privacy Policy</Link>
      </Stack>
    </Box>
  );
}

export default Footer
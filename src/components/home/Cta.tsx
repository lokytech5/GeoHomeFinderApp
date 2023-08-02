import { Box, Button, Heading, useColorModeValue, Text } from '@chakra-ui/react'
import React from 'react'

const Cta = () => {
  return (
   <Box
          w="full"
          p={10}
          bg={useColorModeValue("blue.400", "blue.800")}
          color="white"
        >
          <Heading size="lg" mb={4}>
            Ready to find your dream home?
          </Heading>
          <Text fontSize="lg" mb={6}>
            Join GeoHomeFinder today and revolutionize your house-hunting
            experience!
          </Text>
          <Button colorScheme="whiteAlpha">Get Started</Button>
        </Box>
  )
}

export default Cta
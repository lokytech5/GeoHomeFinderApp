import { Box, Heading, Text, SimpleGrid, useColorModeValue } from '@chakra-ui/react';


const Testimonials = () => {

    
  return (
    <Box
      w="full"
      p={10}
      bg={useColorModeValue("blue.50", "blue.800")}
      color={useColorModeValue("black", "white")}
    >
      <Heading size="lg" mb={6}>
        What Our Users Say:
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {[...Array(2)].map((_, i) => (
          <Box
            key={i}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            bg={useColorModeValue("white", "gray.700")}
          >
            <Heading fontSize="md" mb={2}>
              User {i + 1}
            </Heading>
            {/* Insert hypothetical Rating component here */}
            {/* <Rating value={5} max={5} readOnly /> */}
            <Text>
              GeoHomeFinder has made my home search so much easier and
              efficient. I love the intuitive design and ease of use.
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Testimonials
import { Box, SimpleGrid, Text, Heading } from "@chakra-ui/react";
import { FaSnapchat, FaSearch, FaInfo } from 'react-icons/fa';

const Features = () => {

  return (
    <Box w="full" p={10}>
      <Heading size="lg" mb={6}>
        How It Works:
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Box>
          <Heading size="md" mb={2}>
            Search with Ease
          </Heading>
          <FaSearch color="blue.500" />
          <Text>
            Enter your desired location or Use our integrated Google Maps Search
            to find your dream home.
          </Text>
        </Box>
        <Box>
          <Heading size="md" mb={2}>
            Discover
          </Heading>
          <FaInfo color="blue.500" />
          <Text>
            Browse through our comprehensive list of available properties.
          </Text>
        </Box>
        <Box>
          <Heading size="md" mb={2}>
            Chat with Agent
          </Heading>
          <FaSnapchat color="blue.500" />
          <Text>
            Get in touch with real estate agent directly through our platform in
            real-time.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Features
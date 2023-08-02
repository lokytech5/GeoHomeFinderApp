import { Box, Text, Heading, useColorModeValue, VStack, Image, Flex, Divider, GridItem, Grid, Button, ListItem, ListIcon, List, Center, SimpleGrid } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';


const AboutPage = () => {

  return (
    <>
      <Box py={12} bg={useColorModeValue("gray.50", "gray.800")}>
        <VStack
          spacing={20}
          align="start"
          maxW="7xl"
          mx="auto"
          px={{ base: "6", md: "8" }}
        >
          {/* About Section */}
          <Box textAlign="center">
            <Heading size="2xl" mb={4}>
              About GeoHomeFinder
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.500", "gray.400")}
            >
              GeoHomeFinder is a dynamic web application designed to
              revolutionize your house-hunting experience. It integrates with
              Google Maps to allow users to search for homes in desired
              locations with ease.
            </Text>
          </Box>
          <Divider />

          {/* Mission and Vision Section */}
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={10}
            px={{ base: "0", md: "12" }}
          >
            <GridItem colSpan={1} textAlign={{ base: "center", md: "left" }}>
              <Heading size="xl" mb={4}>
                Our Mission
              </Heading>
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.500", "gray.400")}
              >
                Our mission is to simplify the house hunting process, by
                bringing everything you need to one platform.
              </Text>
            </GridItem>
            

            <GridItem colSpan={1} textAlign={{ base: "center", md: "left" }}>
              <Heading size="xl" mb={4}>
                Our Vision
              </Heading>
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.500", "gray.400")}
              >
                We envision a world where finding your dream home is just a
                click away. We aim to remove the stress and confusion commonly
                associated with house hunting.
              </Text>
            </GridItem>
          </Grid>

          <Divider />

          {/* Features Section */}
          <Box>
            <Heading textAlign="center" size="2xl" mb={8}>
              Features
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10}>
              <Flex padding={4} alignItems="center">
                <FaCheckCircle color="green" />
                <Text fontSize="lg" ml={2}>
                  Real-time property updates
                </Text>
              </Flex>
              <Flex padding={4} alignItems="center">
                <FaCheckCircle color="green" />
                <Text fontSize="lg" ml={2}>
                  Filter properties preference
                </Text>
              </Flex>
              <Flex padding={4} alignItems="center">
                <FaCheckCircle color="green" />
                <Text fontSize="lg" ml={2}>
                  Save favorite properties
                </Text>
              </Flex>
              <Flex padding={4} alignItems="center">
                <FaCheckCircle color="green" />
                <Text fontSize="lg" ml={2}>
                  Interactive map view
                </Text>
              </Flex>
            </SimpleGrid>
          </Box>

          <Divider />

          {/* Contact Section */}
          <Box textAlign={{ base: "center", md: "left" }}>
            <Heading size="2xl" mb={8}>
              Contact Us
            </Heading>
            <Text
              fontSize="lg"
              mb={4}
              color={useColorModeValue("gray.500", "gray.400")}
            >
              Have more questions? We'd love to hear from you. Send us a message
              and we'll respond as soon as possible.
            </Text>
            <Button colorScheme="blue">Contact Us</Button>
          </Box>
        </VStack>
      </Box>
    </>
  );
}

export default AboutPage
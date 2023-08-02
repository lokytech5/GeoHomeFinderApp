import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <Box bg={mode("gray.50", "inherit")} py="31" px={{ base: "6", md: "8" }}>
      <Box maxW="lg" mx="auto">
        <Flex flexDirection="column" alignItems="center">
          <Heading textAlign="center" size="2xl" fontWeight="extrabold">
            Choose your plan
          </Heading>
          <Text
            mt="4"
            mb="10"
            align="center"
            maxW="md"
            fontWeight="medium"
            fontSize="20px"
          >
            GeoHomeFinder is a dynamic web application designed to revolutionize
            your house-hunting experience.
          </Text>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "5", md: "10", lg: "20" }}
        >
          <PricingCard
            name="Free Plan"
            price="0.00"
            description="Add Up to 5 apartments"
            features={["Only 5 listings"]}
            detailedFeatures={["You can list up to 5 apartments"]}
            buttonText="Sign Up for Free"
          />

          <PricingCard
            name="Premium Plan"
            price="5000"
            description="Unlimited apartments"
            trialOffer="Start with a 14-day free trial"
            isMostPopular
            features={["Unlimited listings"]}
            detailedFeatures={["You can list as many apartments as you want"]}
            buttonText="Start 14-Day Free Trial"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Pricing;

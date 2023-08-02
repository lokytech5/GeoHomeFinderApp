import {
  Badge,
  Box,
  Button,
  Divider,
  Heading,
  Icon,
  Stack,
  Text,
  Tooltip,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaInfo } from "react-icons/fa";
import React from "react";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  trialOffer?: string;
  features: string[];
  detailedFeatures?: string[];
  buttonText: string;
  isMostPopular?: boolean;
  isYearlyDiscounted?: boolean;
}

const PricingCard = ({
  name,
  price,
  description,
  features,
  buttonText,
  isMostPopular,
  isYearlyDiscounted,
  trialOffer,
  detailedFeatures,
}: PricingCardProps) => {
  return (
    <Box
      w={{ base: "full", lg: "xl" }}
      shadow="2xl"
      borderWidth="1px"
      _hover={{ shadow: "xl" }}
      rounded={{ md: "lg" }}
    >
      <Box pt="5" pb="6" px="10" bg={mode("gray.50", "gray.900")}>
        {isMostPopular && (
          <Badge colorScheme="red" px="2" py="1" mb="4">
            Most Popular
          </Badge>
        )}
        <Text
          as="h4"
          fontSize="md"
          fontWeight="semibold"
          textAlign="center"
          textTransform="uppercase"
          letterSpacing="wider"
          color={mode("gray.600", "gray.400")}
        >
          {name}
        </Text>
        <Heading
          as="h1"
          size="4xl"
          fontWeight="extrabold"
          textAlign="center"
          mt="14"
        >
          #{price}
        </Heading>
        <Text
          mt="5"
          as="h2"
          fontSize="lg"
          fontWeight="medium"
          textAlign="center"
          color={mode("gray.600", "gray.400")}
        >
          {description}
        </Text>
        {trialOffer && (
          <Text
            as="h3"
            fontSize="sm"
            fontWeight="medium"
            textAlign="center"
            color={mode("gray.600", "gray.400")}
          >
            {trialOffer}
          </Text>
        )}
        {isYearlyDiscounted && (
          <Text
            as="h3"
            fontSize="sm"
            fontWeight="medium"
            textAlign="center"
            color={mode("green.600", "green.400")}
          >
            Discount for yearly commitment!
          </Text>
        )}
      </Box>
      <Box py="8" px="5" bg={mode("white", "gray.800")} rounded={{ md: "lg" }}>
        <Stack spacing="6">
          {features.map((feature: string, id: number) => (
            <Tooltip
              label={detailedFeatures ? detailedFeatures[id] : ""}
              key={id}
            >
              <Box color={mode("gray.600", "gray.400")}>
                <FaInfo />
                <Text fontWeight="medium">{feature}</Text>
              </Box>
            </Tooltip>
          ))}
          <Button colorScheme="blue" size="lg" fontSize="md">
            {buttonText}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default PricingCard;

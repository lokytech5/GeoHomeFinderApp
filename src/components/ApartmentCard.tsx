import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Spacer,
} from "@chakra-ui/react";

interface Apartment {
  location: {
    type: string;
    coordinates: [number, number];
    formattedAddress: string;
    city: string;
  };
  _id: string;
  type: string;
  images: string[];
  price: number;
  description: string;
  agent: string[];
  available: string;
  bedrooms: number;
  bathrooms: number;
  petPolicy: string;
  amenities: string[];
  createdAt: string;
  reviews: any[];
  __v: number;
}

interface ApartmentProps {
  apartment: Apartment;
}

const ApartmentCard = ({ apartment }: ApartmentProps) => {
  return (
    <Box
      maxW="xs"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      my={2}
      bg="white"
      shadow="sm"
    >
      <Image
        src={apartment.images[0]}
        alt={apartment.type}
        height="180px"
        objectFit="cover"
        width="100%"
      />

      <Box p="4">
        <Text fontWeight="bold" fontSize="xl" mb="2">
          {apartment.type}
        </Text>

        <Flex direction="column">
          <Flex justify="space-between" align="center" color="gray.600">
            <Text>
              {apartment.bedrooms} BR | {apartment.bathrooms} BA
            </Text>
            <Text fontWeight="bold">${apartment.price}/mo</Text>
          </Flex>
          <Spacer />
          <Button colorScheme="teal" size="sm" mt={4}>
            View More
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ApartmentCard;

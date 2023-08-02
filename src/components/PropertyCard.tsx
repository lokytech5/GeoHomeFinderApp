import { Box, Image, Text } from "@chakra-ui/react";

export interface Property {
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
}
interface Props {
    property: Property;
}

const PropertyCard = ({ property }: Props) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image src={property.image} alt={property.title} />

    <Box p="6">
      <Box alignItems="baseline">
        <Text fontSize="xl" fontWeight="bold">
          {property.title}
        </Text>
      </Box>

      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
        {property.location}
      </Box>

      <Box>
        {property.price}
        <Box as="span" color="gray.600" fontSize="sm">
          / wk
        </Box>
      </Box>

      <Box mt="2" alignItems="center">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <Box
              as="span"
              color={i < property.bedrooms ? "teal.500" : "gray.300"}
              key={i}
            >
              ★
            </Box>
          ))}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {property.bedrooms} beds &bull; {property.bathrooms} baths
        </Box>
      </Box>
    </Box>
  </Box>
);

export default PropertyCard;
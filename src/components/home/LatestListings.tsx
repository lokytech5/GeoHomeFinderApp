import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import PropertyCard, { Property } from '../PropertyCard';

interface Props{
    properties: Property[];
}
const LatestListings = ({ properties }: Props) => {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg">
        Latest Listings
      </Heading>
      <SimpleGrid columns={3} spacing={10}>
        {properties.map((property) => (
          <PropertyCard property={property} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default LatestListings
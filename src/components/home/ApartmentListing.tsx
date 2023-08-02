import { Box, Button, Image, Text, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import spnsor from "../../assets/sponsor.jpg"
import useApartment from '../../hooks/useApartment';
import useLatestApartment from '../../hooks/useLatestApartment';
import ApartmentCard from '../ApartmentCard';

const ApartmentListing = () => {
   const { data, error, isLoading } = useLatestApartment();
   console.log("latestApartment", data);
   

    if (isLoading) {
      return (
        <Box p={4}>
          <Spinner />
        </Box>
      );
    }

    if (error) {
      return (
        <Box p={4}>
          <Text>Unable to load apartments: {error.message}</Text>
        </Box>
      );
    }

  return (
    <Box p={4}>
      <Heading mb={4}>Latest Apartments</Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={10}>
        {data?.apartment.map((apartment) => (
          <ApartmentCard key={apartment._id} apartment={apartment} />
        ))}
      </SimpleGrid>
    </Box>
    // <Box w="full" p={10}>
    //   <Heading size="lg" mb={6}>
    //     Featured Listings:
    //   </Heading>
    //   <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
    //     {[...Array(3)].map((_, i) => (
    //       <Box key={i} p={5} shadow="md" borderWidth="1px" borderRadius="md">
    //         <Image
    //           src={spnsor}
    //           alt={`Apartment ${i + 1}`}
    //           mb={4}
    //         />
    //         <Heading fontSize="md" mb={2}>
    //           Apartment {i + 1}
    //         </Heading>
    //         <Text>Located at XYZ. Listed by Agent {i + 1}.</Text>
    //         <Button colorScheme="blue" mt={4}>
    //           View More
    //         </Button>
    //       </Box>
    //     ))}
    //   </SimpleGrid>
    // </Box>
  );
}

export default ApartmentListing
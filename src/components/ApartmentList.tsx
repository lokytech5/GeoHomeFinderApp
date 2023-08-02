import React, { FC } from "react";
import ApartmentCard from "./ApartmentCard"
import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useApartment from "../hooks/useApartment";

const ApartmentList: FC = () => {
  const { data, error, isLoading } = useApartment();
  console.log("apartment", data);

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
    <>
      <Box px={["4", "8"]} py="4">
        <SimpleGrid columns={[1, 1, 2, 3]} spacing="4">
          {data?.apartment.map((apartment) => (
            <ApartmentCard key={apartment._id} apartment={apartment} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default ApartmentList;

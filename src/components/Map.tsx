import { Box } from "@chakra-ui/react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
const Map = () => {
  const mapStyles = { height: "50vh", width: "100%" };

  const defaultCenter = {
    lat: 40.7128,
    lng: -74.006,
    zoom: 10,
  };

  return (
    <Box mb={5}>
    <LoadScript googleMapsApiKey="AIzaSyBgFIEnkYYeDb4x0JnN-urHqUXUEwhEYek">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
    </Box>
  );
};

export default Map;

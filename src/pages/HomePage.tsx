import { Box, Stack, IconButton, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Header from "../components/home/Header";
import Features from "../components/home/Features";
import Cta from "../components/home/Cta";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/home/Footer";
import ApartmentListing from "../components/home/ApartmentListing";
import Map from "../components/Map";

const HomePage = () => {
  return (
    <>
      <Box mx="auto" maxWidth="1200px">
        <Header />
        <Features />

        {/* Featured Listings Section */}
        <ApartmentListing />

        <Map/>
        {/* Social Media Share Buttons */}
        <Stack direction="row" spacing={2}>
          <IconButton aria-label="Facebook" icon={<Icon as={FaFacebook} />} />
          <IconButton aria-label="Twitter" icon={<Icon as={FaTwitter} />} />
          <IconButton aria-label="Instagram" icon={<Icon as={FaInstagram} />} />
        </Stack>

        {/* Testimonials Section */}
        <Testimonials />
        {/* CTA Section */}
        <Cta />
        <Footer />
      </Box>
    </>
  );
};

export default HomePage;

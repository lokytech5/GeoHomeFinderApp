import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Switch, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react'

const SignUpPage = () => {
     const [username, setUsername] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [userType, setUserType] = useState("User");
     const [phone, setPhone] = useState("");
     const [agencyName, setAgencyName] = useState("");
     const [address, setAddress] = useState("");
     const [age, setAge] = useState("");

     const isAgent = userType === "Agent";

     const handleSubmit = (event: React.FormEvent) => {
       event.preventDefault();
       // Handle submission here
     };

  return (
    <Flex
      minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box
        px={8}
        py={12}
        maxWidth="500px"
        width="full"
        backgroundColor={useColorModeValue("white", "gray.700")}
        boxShadow="lg"
        borderRadius="lg"
      >
        <Box textAlign="center">
          <Heading>SingUp</Heading>
        </Box>
        <Box my={8} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4} display="flex" alignItems="center">
              <FormLabel mb="0">Sign up as an agent</FormLabel>
              <Switch
                ml={2}
                onChange={() =>
                  setUserType((prev) => (prev === "User" ? "Agent" : "User"))
                }
                colorScheme="blue"
              />
            </FormControl>
            {isAgent && (
              <>
                <FormControl mt={4}>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Agency Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your agency name"
                    value={agencyName}
                    onChange={(e) => setAgencyName(e.target.value)}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Address</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Age</FormLabel>
                  <Input
                    type="number"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </FormControl>
              </>
            )}
            <Button
              colorScheme="blue"
              width="full"
              mt={4}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default SignUpPage
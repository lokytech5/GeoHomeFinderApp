import React from 'react'
import {
  Box,
  Button,
  Checkbox,
  Link,
  Stack,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useBreakpointValue,
  useColorModeValue,
  Flex,
  Text,
} from "@chakra-ui/react";

const LoginPage = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const size = useBreakpointValue({ base: "sm", md: "md" });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle login
      console.log(`Username: ${username}`);
      console.log(`Password: ${password}`);
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
          <Heading>Login</Heading>
        </Box>
        <Box my={8} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email address"         
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
               
               
              />
            </FormControl>
            <Stack
              justifyContent="space-between"
              direction={{ base: "column", sm: "row" }}
              mt={4}
              align="start"
            >
              <Box>
                <Checkbox>Remember me</Checkbox>
              </Box>
              <Box>
                <Link color={"blue.400"}>Forgot your password?</Link>
              </Box>
            </Stack>
            <Button
              colorScheme="blue"
              width="full"
              mt={4}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default LoginPage
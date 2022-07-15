import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAPI } from "../Redux/AuthReducer/action";

export default function SignupCard() {
  const [creds, setCreds] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const submithandler = () => {
    dispatch(registerAPI(creds)).then((res) => {
      if (res.type === "REGISTER_SUCCESS") {
        navigate("/login");
      }
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    onChange={(e) =>
                      setCreds({
                        ...creds,
                        name: e.target.value,
                      })
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Username</FormLabel>
                  <Input
                    isRequired
                    type="text"
                    name="username"
                    onChange={(e) =>
                      setCreds({
                        ...creds,
                        username: e.target.value,
                      })
                    }
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(e) =>
                  setCreds({
                    ...creds,
                    email: e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl id="mobile" isRequired>
              <FormLabel>Mobile</FormLabel>
              <Input
                type="number"
                onChange={(e) =>
                  setCreds({
                    ...creds,
                    mobile: e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) =>
                  setCreds({
                    ...creds,
                    password: e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl id="description" isRequired>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                onChange={(e) =>
                  setCreds({
                    ...creds,
                    description: e.target.value,
                  })
                }
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => submithandler()}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <RouteLink color={"blue.400"} to="/login">
                  Login
                </RouteLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

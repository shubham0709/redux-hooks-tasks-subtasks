import {
  Badge,
  Box,
  Container,
  Flex,
  HStack,
  Input,
  Spacer,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SubTask from "./SubTask";

const SingleTask = ({ elem }) => {
  return (
    <Container w="80%" border="2px solid black" p="10px">
      <Container>{elem.description}</Container>
      <Flex p="10px">
        <Box border="2px solid black" p="3px">
          <Flex direction="col">
            {elem?.tags?.map((x, i) => (
              <Badge
                key={i}
                ml="1"
                fontSize="12px"
                bg="green.500"
                color="white"
                p="5px"
              >
                {x}
              </Badge>
            ))}
          </Flex>
        </Box>
        <Spacer />
      </Flex>
      <SubTask arr={elem.subtasks} />
    </Container>
  );
};

export default SingleTask;

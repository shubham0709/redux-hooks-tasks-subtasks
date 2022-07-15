import {
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
  console.log(elem);
  return (
    <Container w="80%" border="2px solid black" p="10px">
      <Text fontWeight="700">Task</Text>
      <Flex p="10px">
        <Box border="2px solid black" p="3px">
          {elem.tags[0]}
        </Box>
        <Spacer />
      </Flex>
      <Container>{elem.description}</Container>
      <SubTask arr={elem.subtasks} />
      {/* {
        <Box>
          {elem.substasks?.length &&
            elem.substasks.map((elem, i) => (
              <Box key={i}>
                <Input type="checkbox" />
                <TagLabel>{elem}</TagLabel>
              </Box>
            ))}
        </Box>
      } */}
    </Container>
  );
};

export default SingleTask;

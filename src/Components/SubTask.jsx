import { Box, Checkbox, Input, TagLabel, VStack } from "@chakra-ui/react";
import React from "react";

const SubTask = ({ arr }) => {
  return (
    <Box>
      {arr?.length &&
        arr.map((elem, i) => (
          <Box key={i}>
            <VStack>
              <Box mt="3px">
                <Checkbox w="200px" bg="black" color="white" p="5px">
                  {elem.title} {" sub task"}
                </Checkbox>
              </Box>
            </VStack>
          </Box>
        ))}
    </Box>
  );
};

export default SubTask;

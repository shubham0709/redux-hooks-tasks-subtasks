import React, { useEffect, useState } from "react";
import { getTasksAPI } from "../Redux/AppReducer/action";
import { useSelector, useDispatch } from "react-redux";
import { Box, Center, Container, HStack, VStack } from "@chakra-ui/react";
import TaskCategory from "../Components/TaskCategory";
import { logoutAPI } from "../Redux/AuthReducer/action";

const HomePage = () => {
  const { tasks, isLoading, isError } = useSelector(
    (state) => state.AppReducer
  );
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({});

  const logoutHandler = () => {
    dispatch(logoutAPI());
  };

  useEffect(() => {
    dispatch(getTasksAPI());
  }, []);

  useEffect(() => {}, []);

  return (
    <Container border="3px solid red" maxW="95%" h="auto">
      <HStack>
        <VStack w="250px" h="600px" border="2px solid blue" gap="0">
          <Box w="100%" h="18vh" border="2px solid black"></Box>
          <Box w="100%" h="33vh" border="2px solid black">
            <VStack p="10px">
              <Box w="90%" h="40px" bg="#DBE8FC">
                All
              </Box>
              <Box w="90%" h="40px" bg="#D6E8D5">
                Personal
              </Box>
              <Box w="90%" h="40px" bg="#E1D4E7">
                Official
              </Box>
              <Box w="90%" h="40px" bg="#FFE6CC">
                Others
              </Box>
            </VStack>
          </Box>
          <Box w="100%" h="33vh" border="2px solid black"></Box>
          <Box
            as="button"
            w="100%"
            h="9vh"
            border="2px solid black"
            bg="skyblue"
            onClick={() => logoutHandler()}
          >
            {" "}
            LOGOUT
          </Box>
        </VStack>
        <HStack maxW="500px">
          <TaskCategory color="#E1D4E7" task={tasks} category="todo" />
        </HStack>
        <HStack maxW="500px">
          <TaskCategory color="#FFE6CC" task={tasks} category="in-progress" />
        </HStack>
        <HStack maxW="500px">
          <TaskCategory color="#D6E8D5" task={tasks} category="done" />
        </HStack>
      </HStack>
    </Container>
  );
};

export default HomePage;

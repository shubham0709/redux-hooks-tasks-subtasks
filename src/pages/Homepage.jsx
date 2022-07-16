import React, { useEffect, useState } from "react";
import { getTasksAPI } from "../Redux/AppReducer/action";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  HStack,
  VStack,
} from "@chakra-ui/react";
import TaskCategory from "../Components/TaskCategory";
import { logoutAPI } from "../Redux/AuthReducer/action";
import UserProfile from "../Components/UserProfile";

const HomePage = () => {
  const { tasks, isLoading, isError } = useSelector(
    (state) => state.AppReducer
  );
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    dispatch(getTasksAPI());
  }, []);

  useEffect(() => {}, []);

  return (
    <Container border="3px solid red" maxW="100%" p="5px">
      <Flex>
        <UserProfile tasks={tasks} />

        <TaskCategory color="#E1D4E7" task={tasks} category="todo" />

        <TaskCategory color="#FFE6CC" task={tasks} category="in-progress" />

        <TaskCategory color="#D6E8D5" task={tasks} category="done" />
      </Flex>
    </Container>
  );
};

export default HomePage;

import { Box } from "@chakra-ui/react";
import React from "react";
import SingleTask from "./SingleTask";

const TaskCategory = ({ color, task, category }) => {
  if (task) {
    task = task.filter((elem, i) => {
      return elem.category === category;
    });
  }
  return (
    <Box bg={color} w="25vw" h="100vh" p="5">
      <Box fontSize="40px">{category}</Box>
      {task?.length &&
        task.map((elem, i) => <SingleTask key={elem.id} elem={elem} />)}
    </Box>
  );
};

export default TaskCategory;

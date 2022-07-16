import { Box } from "@chakra-ui/react";
import React from "react";
import { useSearchParams } from "react-router-dom";
import SingleTask from "./SingleTask";

const TaskCategory = ({ color, task, category }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let arr = searchParams.getAll("tags");

  // if (arr.length != 0 && !arr.includes("All")) {
  //   let temp = [];
  //   let check = new Array(task.length).fill(1);
  //   task.forEach((x, i) => {
  //     x.tags.forEach((y, j) => {
  //       if (check[i] === 1 && arr.includes(y)) {
  //         temp.push(x);
  //         check[i] = 0;
  //       }
  //     });
  //   });
  //   task = temp;
  // }

  task = task.filter((elem, i) => {
    return elem.category === category;
  });
  if (arr.length != 0 && !arr.includes("All")) {
    let temp = [];
    let id = [];
    task.forEach((elem, i) => {
      elem.tags.forEach((tag, j) => {
        if (arr.includes(tag) && !id.includes(elem.id)) {
          temp.push(elem);
          id.push(elem.id);
        }
      });
    });
    task = temp;
  }

  return (
    <Box bg={color} w="25vw" h="0 auto" p="5">
      <Box fontSize="40px">{category}</Box>
      {task?.length &&
        task.map((elem, i) => <SingleTask key={elem.id} elem={elem} />)}
    </Box>
  );
};

export default TaskCategory;

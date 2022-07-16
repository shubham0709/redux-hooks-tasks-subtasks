import { Box, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { logoutAPI } from "../Redux/AuthReducer/action";
import { getData } from "../Utils/localStorage";
import { getTasksAPI } from "../Redux/AppReducer/action";

const UserProfile = () => {
  const dispatch = useDispatch();
  let [selectedTags, setSelectedTags] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const tasks = useSelector((state) => state.AppReducer.tasks);
  const tags = {};
  tasks.forEach((x) => {
    x.tags.forEach((y) => {
      tags[y] = tags[y] + 1 || 1;
    });
  });

  const logoutHandler = () => {
    dispatch(logoutAPI());
  };

  useEffect(() => {
    if (selectedTags.length === 0 || selectedTags.includes("All")) {
      dispatch(getTasksAPI());
    }
    setSearchParams({ tags: [...selectedTags] });
  }, [selectedTags]);

  const handleSelectTag = (val) => {
    if (!selectedTags.includes(val)) {
      selectedTags.push(val);
    } else {
      selectedTags = selectedTags.filter((x) => x !== val);
    }
    setSelectedTags([...selectedTags]);
  };

  return (
    <VStack w="250px" h="600px" border="2px solid blue" gap="0">
      <Box w="100%" h="18vh" border="2px solid black">
        DETAILS
      </Box>
      <Box w="100%" h="33vh" border="2px solid black">
        <VStack p="10px">
          <Box
            w="90%"
            h="40px"
            cursor={"pointer"}
            bg={!selectedTags.includes("All") ? "#DBE8FC" : "blue.400"}
            onClick={() => {
              handleSelectTag("All");
            }}
          >
            All :{" "}
            {tags.personal ? tags.personal + tags.official + tags.others : 0}
          </Box>
          <Box
            w="90%"
            h="40px"
            cursor={"pointer"}
            bg={!selectedTags.includes("personal") ? "#D6E8D5" : "green.400"}
            onClick={() => {
              handleSelectTag("personal");
            }}
          >
            Personal : {tags.personal}
          </Box>
          <Box
            w="90%"
            h="40px"
            cursor={"pointer"}
            bg={!selectedTags.includes("official") ? "#E1D4E7" : "purple.300"}
            onClick={() => {
              handleSelectTag("official");
            }}
          >
            Official : {tags.official}
          </Box>
          <Box
            w="90%"
            h="40px"
            cursor={"pointer"}
            bg={!selectedTags.includes("others") ? "#FFE6CC" : "orange.300"}
            onClick={() => {
              handleSelectTag("others");
            }}
          >
            Others : {tags.others}
          </Box>
        </VStack>
      </Box>
      <Box w="100%" h="33vh" border="2px solid black"></Box>
      <Box
        as="button"
        w="100%"
        h="100px"
        border="2px solid black"
        bg="skyblue"
        onClick={() => logoutHandler()}
      >
        {" "}
        LOGOUT
      </Box>
    </VStack>
  );
};

export default UserProfile;

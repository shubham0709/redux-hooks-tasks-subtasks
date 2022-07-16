import { Box, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logoutAPI } from "../Redux/AuthReducer/action";
import { getData } from "../Utils/localStorage";

const UserProfile = ({ tasks }) => {
  const token = getData("isAuth");
  const dispatch = useDispatch();
  const [tags, setTags] = useState({});
  const [all, setAll] = useState(0);

  // tasks.forEach((x) => {
  //   x.tags.forEach((y) => {
  //     tags[y] = tags[y] + 1 || 1;
  //   });
  // });
  // console.log(tags);

  useEffect(() => {
    setTags({});
    tasks.forEach((x) => {
      x.tags.forEach((y) => {
        tags[y] = tags[y] + 1 || 1;
      });
    });
    setTags({ ...tags });
  }, [tasks.length]);

  //   useEffect(() => {
  //     axios
  //       .post("https://masai-api-mocker.herokuapp.com/user/masai-school", {
  //         headers: {
  //           Authorization: token + "",
  //         },
  //       })
  //       .then((res) => console.log("response from profile : ", res))
  //       .catch((e) => console.log("error : "));
  //   }, []);

  const logoutHandler = () => {
    dispatch(logoutAPI());
  };

  return (
    <VStack w="250px" h="600px" border="2px solid blue" gap="0">
      <Box w="100%" h="18vh" border="2px solid black">
        DETAILS
      </Box>
      <Box w="100%" h="33vh" border="2px solid black">
        <VStack p="10px">
          <Box w="90%" h="40px" bg="#DBE8FC">
            All :{" "}
            {tags.personal ? tags.personal + tags.official + tags.others : 0}
          </Box>
          <Box w="90%" h="40px" bg="#D6E8D5">
            Personal : {tags.personal}
          </Box>
          <Box w="90%" h="40px" bg="#E1D4E7">
            Official : {tags.official}
          </Box>
          <Box w="90%" h="40px" bg="#FFE6CC">
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

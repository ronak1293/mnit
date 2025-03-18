import React from "react"; 
import { Box } from "@chakra-ui/react";
import { Avatar } from "./ui/avatar";


const Profile = () => {
  return (
    <Box width="50vw" height="70vh" display="flex" justifyContent="center" alignItems="center" bg="gray.100" >
      <Avatar
        size="8xl"
        src="/img/passportphoto.jpg"
        alt="Profile Picture"
        borderRadius="full"
        width="200px"
        height="200px"
      />
    </Box>
  );
};

export default Profile;


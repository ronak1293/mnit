import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import Profile from "./Profile"; 
import Aboutme from "./Aboutme";
import ImageSlider from "./ImageSlider";
import NoticeBoard from "./Notice";
import {  Text,  VStack } from "@chakra-ui/react";


const Home = () => {
  return (
    <Box justifyItems={"center"} >
       <HStack spacing={8} justify="center" align="center">
      <Profile/>
      <Aboutme />
    </HStack>
    
    <Box textAlign="center" my={8} width="80%" mx="auto" marginTop={"50px"} marginBottom={"80px"}>
      {/* Custom Divider with Heading */}
      <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
        <Box flex="1" height="2px" bg="gray.500" />
        <Text px={4} fontSize="2xl" fontWeight="semibold" color="gray.700">
          Research Interests
        </Text>
        <Box flex="1" height="2px" bg="gray.500" />
      </Box>

      {/* Description */}
      <Text mt={4} fontSize="md" color="gray.600">
        My research focuses on Information security, Wireless Networks, Software Defined Networks, IoT etc.
      </Text>

      {/* Divider Below */}
      <Box display="flex" alignItems="center" justifyContent="center" mt={4}>
        <Box flex="1" height="2px" bg="gray.500" />
      </Box>
    </Box>
    <NoticeBoard/>
    <ImageSlider/>
    </Box>
  );
};

export default Home;


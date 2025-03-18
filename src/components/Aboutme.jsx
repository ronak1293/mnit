import React from "react"; 
import { Box, Button, Text, Link, VStack, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCloudDownloadAlt } from "react-icons/fa";

const Aboutme = () => {
  return (
    <Box p={6} textAlign="center">
      <VStack spacing={5}>
        
        <Text color="gray.700" maxW="450px">
        Hi ,I am <strong>Dr. Meenakshi Tripathi</strong>, an Associate Professor in the Department of Computer Science and Engineering at MNIT Jaipur.
        </Text>

        <VStack spacing={3}>
          <Link color="gray.700" href="mailto:mtripahti.cse@mnit.ac.in" isExternal _hover={{ color: "teal.500" }}>
            <Icon as={FaEnvelope} boxSize={5} mr={2} /> mtripahti.cse@mnit.ac.in
          </Link>
          <Link color="gray.700" href="tel:+1234567890" _hover={{ color: "teal.500" }}>
            <Icon as={FaPhone} boxSize={5} mr={2} /> +1234567890
          </Link>
          <Link color="gray.700" href="https://github.com/yourgithub" isExternal _hover={{ color: "teal.500" }}>
            <Icon as={FaGithub} boxSize={5} mr={2} /> GitHub
          </Link>
          <Link color="gray.700" href="https://www.linkedin.com/in/dr-meenakshi-tripathi-6387b1115/" isExternal _hover={{ color: "teal.500" }}>
            <Icon as={FaLinkedin} boxSize={5} mr={2} /> LinkedIn
          </Link>
        </VStack>

        {/* Stylish Download CV Button */}
        <Button
          marginTop="8px"
          as="a"
          href="/cv.docx"  // ✅ Correct Path
          download
          colorScheme="teal"
          size="lg"
          borderRadius="full"
          px={6}
          py={3}
          boxShadow="md"
          display="flex"
          alignItems="center"
          gap={2} // Adds spacing between text & icon
          _hover={{
            bg: "teal.600",
            transform: "scale(1.05)",
            transition: "0.2s ease-in-out",
          }}
        >
          <Icon as={FaCloudDownloadAlt} boxSize={6} /> {/* ✅ Explicit Icon Size */}
          Download CV
        </Button>
      </VStack>
    </Box>
  );
};

export default Aboutme;

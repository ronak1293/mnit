import { Box, VStack, HStack } from "@chakra-ui/react";
import { IoSchoolSharp } from "react-icons/io5";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const educationData = [
  "Bachelor of Engineering (B.E.), 2003, Computer Science & Engg., Rajasthan University, Jaipur",
  "M.Tech., 2005, Computer Science & Engg., Bansthali Vidyapith, Banasthali",
  "PhD, 2014, Computer Science & Engineering, MNIT, Jaipur"
];

const experienceData = [
  "Associate Professor, MNIT Jaipur, May 2018 Onwards",
  "Assistant Professor, MNIT Jaipur, March 2008 to May 2018",
  "Assistant Professor, CTAE, MPUAT, Udaipur, March 2005 – March 2008"
];

const Section = ({ icon, title, items }) => (
  <Box w="100%" borderRadius="lg" boxShadow="md" p={5} bg="gray.50">
    <HStack spacing={3} mb={2}>
      {icon}
      <Box as="h2" fontSize="lg" fontWeight="bold" color="black">
        {title}
      </Box>
    </HStack>
    <VStack align="start" spacing={1} pl={6}>
      {items.map((item, index) => (
        <HStack key={index} align="center">
          <Box as="span" fontSize="xl" color="black">•</Box>
          <Box fontSize="sm" color="black">{item}</Box>
        </HStack>
      ))}
    </VStack>
  </Box>
);

const About = () => {
  return (
    <Box p={6} maxW="800px" mx="auto" >
      <VStack spacing={5} align="start" gap={50}>
        <Section 
          icon={<IoSchoolSharp size={24} color="blue" />}
          title="Education Qualification"
          items={educationData}
        />
        <Section 
          icon={<HiOutlineOfficeBuilding size={24} color="green" />}
          title="Professional Experience"
          items={experienceData}
        />
      </VStack>
    </Box>
  );
};

export default About;

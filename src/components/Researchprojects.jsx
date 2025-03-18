import { Box, VStack, Text } from "@chakra-ui/react";

const researchProjects = [
  {
    title: "A survey-based report of the usability and accessibility of various ICT tools related to the spoken and reading skills of English language for children with Autism Spectrum Disorder (ASD)",
    pi: "Dr. Meenakshi Tripathi (PI), Dr. Sushant Upadhyay, Dr. Preeti Bhatt",
    agency: "Department of Science and Industrial Training, DST, Delhi",
    budget: "10.6 Lacs",
    status: "Ongoing (2023-2024)"
  },
  {
    title: "MobiSStick: Mobile Enabled Smart Stick for Visually Impaired Person",
    pi: "Dr Meenakshi Tripathi, Dr. Amit Kumar (IIIT Kota), Prof. M. S. Gaur (IIT Jammu)",
    agency: "SYST scheme of SEED Division, Delhi",
    budget: "19 Lacs",
    status: "Ongoing (2017-2023)"
  },
  {
    title: "Low-cost interactive teaching aid in a flipped classroom for Indian academia",
    pi: "Dr. Lava Bhargava (MNIT Jaipur), Dr. Meenakshi Tripathi (Co-PI)",
    agency: "DST Rajasthan",
    budget: "8 Lacs",
    status: "Completed (2017-2020)"
  },
];

const consultancyProject = {
  title: "Third Party Inspection under Smart Raj Project (Phase – I)",
  role: "CO-PI",
  agency: "RUDSICO, State Government of Rajasthan",
  budget: "3.88 Lacs",
  status: "Completed"
};

const organizedEvents = [
  {
    title: "Artificial Intelligence and Machine Learning for Engineering and Social Science Research",
    type: "1-Week Summer School",
    date: "4 Sep - 8 Sep 2023",
    agency: "IEEE CIS, USA",
    role: "General Chair"
  },
  {
    title: "Supply Chain Management and Logistics (Under PM Gati Shakti Scheme)",
    type: "2-Week FDP",
    date: "6 Mar - 17 Mar 2023",
    agency: "AICTE ATAL Academy, India",
    role: "Co-Coordinator"
  },
  {
    title: "Machine Learning for Computer Vision",
    type: "2-Week FDP",
    date: "21 Feb - 4 Mar 2022",
    agency: "EICT Academy",
    role: "Program Coordinator"
  },
];

const Section = ({ title, items }) => (
  <Box w="100%" borderRadius="lg" boxShadow="md" p={5} bg="gray.50">
    <Box bg="#1e1e2f" p={3} textAlign="center" borderRadius="md" mb={3}>
      <Text fontSize="xl" fontWeight="bold" color="white">{title}</Text>
    </Box>
    <VStack align="start" spacing={2} pl={6}>
      {items.map((item, index) => (
        <Box key={index} fontSize="sm" color="black">
          <Text as="b">{item.title}</Text> <br />
          <Text as="i">{item.pi || item.role}</Text> <br />
          <Text>
            <b>Agency:</b> {item.agency} | <b>Budget:</b> {item.budget}
          </Text>
          <Text>
            <b>Status:</b> {item.status || item.date} | <b>Role:</b> {item.role || ""}
          </Text>
        </Box>
      ))}
    </VStack>
  </Box>
);

const ResearchProjects = () => {
  return (
    <Box p={6} maxW="800px" mx="auto">
      <VStack spacing={5} align="start" gap={50}>
        <Section title="Research & Development Projects" items={researchProjects} />
        <Section title="Consultancy Project" items={[consultancyProject]} />
        <Section title="Conferences/Seminars/Workshops Organized" items={organizedEvents} />
      </VStack>
    </Box>
  );
};

export default ResearchProjects;
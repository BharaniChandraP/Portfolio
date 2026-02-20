// import React from 'react';
// import { Box, Heading, Text, SimpleGrid, Badge, VStack, Flex, Icon } from '@chakra-ui/react';
// import { FaUserGraduate, FaMicroscope, FaUniversity } from 'react-icons/fa';

// const StudentCard = ({ name, work, tag }) => (
//   <Box p={5} bg="white" borderRadius="xl" boxShadow="sm" border="1px solid" borderColor="gray.100">
//     <Flex justify="space-between" align="center" mb={2}>
//       <Text fontWeight="bold" fontSize="md">{name}</Text>
//       <Badge colorScheme="blue">{tag}</Badge>
//     </Flex>
//     <Text fontSize="xs" color="gray.500">{work}</Text>
//   </Box>
// );

// const Students = () => {
//   return (
//     <Box>
//       <Heading size="2xl" mb={4} color="#0a192f">Mentorship & Supervision</Heading>
//       <Text color="gray.500" mb={10}>Tasked with guiding and mentoring B.Tech., M.Tech., and PhD students in construction management.</Text>

//       {/* External Doctoral Committees - High Impact */}
//       <Box mb={12}>
//         <Flex align="center" mb={6}>
//           <Icon as={FaUniversity} color="blue.600" mr={3} />
//           <Heading size="lg" color="blue.800">Doctoral Committee Service </Heading>
//         </Flex>
//         <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
//           <StudentCard name="NIT Trichy" work="Ms. Bhavani Raju" tag="DC Member" />
//           <StudentCard name="NITTTR Chennai" work="Mr. Srinivasan R" tag="DC Member" />
//           <StudentCard name="Anna University" work="Mr. Vigneshwaran K" tag="DC Member" />
//           <StudentCard name="ACGCET" work="Mr. Aravindh P" tag="DC Member" />
//         </SimpleGrid>
//       </Box>

//       {/* Thesis Reviews */}
//       <Box mb={12} p={6} bg="blue.900" color="white" borderRadius="2xl">
//         <Flex align="center" mb={4}>
//           <Icon as={FaMicroscope} mr={3} />
//           <Heading size="md">Thesis Examination & Review </Heading>
//         </Flex>
//         <VStack align="start" spacing={3}>
//           <Text fontSize="sm">• Reviewed MS Thesis: "Automated recognition of precast structural elements from point cloud data using BIM and Lidar" (IIT Palakkad).</Text>
//           <Text fontSize="sm">• External Examiner for Master's degree Thesis at **IIT Madras** and **IIT Palakkad**.</Text>
//         </VStack>
//       </Box>

//       {/* Stats Table */}
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
//         <StatBox num="04" label="M.Tech Guided" sub="2024-25" />
//         <StatBox num="08" label="B.Tech Guided" sub="2024-25" />
//         <StatBox num="10" label="Ongoing Projects" sub="2025-26" />
//       </SimpleGrid>
//     </Box>
//   );
// };

// const StatBox = ({ num, label, sub }) => (
//   <Box p={8} bg="white" borderRadius="2xl" textAlign="center" border="1px solid" borderColor="gray.100">
//     <Heading size="2xl" color="blue.700">{num}</Heading>
//     <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" mt={1}>{label}</Text>
//     <Text fontSize="10px" color="gray.400">{sub}</Text>
//   </Box>
// );


// export default Students;


import React from 'react';
import { Box, Heading, Text, SimpleGrid, Badge, VStack, Flex, Stack } from '@chakra-ui/react';
import { FaUniversity, FaUserCheck, FaMicroscope } from 'react-icons/fa';

// Helper components defined at the top to avoid initialization errors
const CommitteeCard = ({ univ, scholar }) => (
  <Box p={4} bg="white" border="1px solid" borderColor="gray.100" borderRadius="lg" boxShadow="sm">
    <Text fontSize="xs" color="blue.600" fontWeight="bold">{univ}</Text>
    <Text fontWeight="bold" fontSize="sm">{scholar}</Text>
  </Box>
);

const StatBox = ({ num, label, sub }) => (
  <Box p={8} bg="blue.50" borderRadius="2xl" textAlign="center">
    <Heading size="2xl" color="blue.700">{num}</Heading>
    <Text fontSize="xs" fontWeight="bold" mt={1}>{label}</Text>
    <Text fontSize="10px" color="gray.400">{sub}</Text>
  </Box>
);

const Students = () => {
  return (
    <Box>
      <Heading size="2xl" mb={4} color="#0a192f">Mentorship & Supervision</Heading>
      <Text color="gray.600" mb={10}>
        Tasked with teaching, guiding, and mentoring B.Tech., M.Tech., and PhD students in construction management.
      </Text>

      {/* Regional Doctoral Committees */}
      <Box mb={12}>
        <Flex align="center" mb={6}>
          <Box color="blue.600" mr={3} fontSize="20px"><FaUniversity /></Box>
          <Heading size="lg" color="blue.800">Doctoral Committee Service</Heading>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
          <CommitteeCard univ="NIT Trichy" scholar="Ms. Bhavani Raju (Management Studies)" />
          <CommitteeCard univ="NITTTR Chennai" scholar="Mr. Srinivasan R (Civil Engineering)" />
          <CommitteeCard univ="Anna University" scholar="Mr. Vigneshwaran K (College of Engineering)" />
          <CommitteeCard univ="ACGCET" scholar="Mr. Aravindh P (Civil Engineering)" />
        </SimpleGrid>
      </Box>

      {/* Thesis Reviews & Examinations */}
      <Box mb={12} p={6} bg="blue.900" color="white" borderRadius="xl">
        <Flex align="center" mb={4}>
          <Box color="blue.200" mr={3} fontSize="20px"><FaMicroscope /></Box>
          <Heading size="md">Thesis Examination & Review</Heading>
        </Flex>
        <VStack align="start" spacing={3}>
          <Text fontSize="sm">• Reviewed MS Thesis: "Automated recognition of precast structural elements from point cloud data for progress monitoring using BIM and Lidar" (IIT Palakkad).</Text>
          <Text fontSize="sm">• External Examiner for Master's degree Thesis at IIT Madras and IIT Palakkad.</Text>
          <Text fontSize="sm">• Invited peer-reviewer for Emerald's Engineering, Construction and Architectural Management journal.</Text>
        </VStack>
      </Box>

      {/* Mentorship Stats */}
      <Box>
        <Heading size="lg" mb={6} color="blue.800">Student Guidance Overview</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          <StatBox num="04" label="M.Tech Dissertations" sub="Completed (2024-25)" />
          <StatBox num="08" label="B.Tech Projects" sub="Completed (2024-25)" />
          <StatBox num="10" label="Ongoing Scholars" sub="PhD, M.Tech & B.Tech" />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Students;
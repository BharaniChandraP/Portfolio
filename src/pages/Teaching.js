// import React from 'react';
// import { Box, Heading, VStack, Text, SimpleGrid, Badge, Flex, Icon } from '@chakra-ui/react';
// import { FaGamepad, FaUsers, FaGraduationCap } from 'react-icons/fa';

// // Move helper components to the top or use function declarations to avoid "initialization" errors
// const CourseCard = ({ name, code, detail }) => (
//   <Box p={4} bg="white" borderRadius="lg" border="1px solid" borderColor="gray.100" boxShadow="sm">
//     <Text fontSize="xs" fontWeight="bold" color="blue.600">{code}</Text>
//     <Text fontWeight="bold" fontSize="sm" color="gray.800">{name}</Text>
//     <Badge mt={2} colorScheme="blue" variant="subtle" fontSize="10px">{detail}</Badge>
//   </Box>
// );

// const PedagogyCard = ({ icon, title, desc }) => (
//   <Box p={6} bg="blue.50" borderRadius="xl" border="1px solid" borderColor="blue.100">
//     <Flex align="center" mb={3}>
//       <Icon as={icon} color="blue.500" w={5} h={5} mr={3} />
//       <Text fontWeight="bold" color="blue.900">{title}</Text>
//     </Flex>
//     <Text fontSize="sm" color="gray.600" lineHeight="tall">{desc}</Text>
//   </Box>
// );

// const Teaching = () => {
//   return (
//     <Box>
//       <Heading size="2xl" mb={4} color="#0a192f">Teaching & Pedagogy</Heading>
//       <Text fontSize="lg" color="gray.600" mb={10}>
//         Bridging theory with real-world construction practices through experiential learning and industry-integrated training.
//       </Text>

//       {/* Pedagogy Section - New from CV */}
//       <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mb={12}>
//         <PedagogyCard 
//           icon={FaGamepad} 
//           title="Experiential Learning" 
//           desc="Conducting serious games and simulations to enable experiential learning of project management in the classroom." 
//         />
//         <PedagogyCard 
//           icon={FaUsers} 
//           title="Industry Integration" 
//           desc="Stimulating case-based discussions and arranging relevant expert lectures from leading construction organizations." 
//         />
//       </SimpleGrid>

//       {/* Full Course List - Updated with all 7 subjects from CV */}
//       <Box mb={12}>
//         <Heading size="lg" mb={6} color="blue.800" borderBottom="2px solid" borderColor="gray.100" pb={2}>
//           Subjects Taught (NIT Trichy)
//         </Heading>
//         <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
//           <CourseCard name="Construction Management" code="CEPE13" detail="B.Tech | 90+ Students" />
//           <CourseCard name="Professional Ethics" code="HSIR14" detail="B.Tech | 125 Students" />
//           <CourseCard name="Lean Construction Concepts" code="CE755" detail="M.Tech | 32 Students" />
//           <CourseCard name="Construction Methods & Equipment" code="CE756" detail="M.Tech | 30 Students" />
//           <CourseCard name="Project Risk Analysis" code="CE772" detail="M.Tech | 33 Students" />
//           <CourseCard name="Quality & Safety Management" code="CE752" detail="M.Tech | Jan 2026" />
//           <CourseCard name="Construction Engineering Lab" code="CE759" detail="M.Tech | 30 Students" />
//         </SimpleGrid>
//       </Box>
//     </Box>
//   );
// };

// export default Teaching;



import React from 'react';
import { Box, Heading, Text, SimpleGrid, Badge, VStack, Flex, Icon, List, ListItem } from '@chakra-ui/react';
import { FaGamepad, FaUsers, FaBookOpen } from 'react-icons/fa';

const Teaching = () => {
  return (
    <Box>
      <Heading size="2xl" mb={4} color="#0a192f">Teaching & Pedagogy</Heading>
      <Text fontSize="lg" color="gray.600" mb={10}>
        Bridging theory with real-world construction practices through experiential learning and industry-integrated training.
      </Text>

      {/* Methodology Section */}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mb={12}>
        <MethodCard 
          icon={FaGamepad} 
          title="Experiential Learning" 
          desc="Conducting serious games and simulations to enable hands-on understanding of project constraints." 
        />
        <MethodCard 
          icon={FaBookOpen} 
          title="Case-Based Discussion" 
          desc="Researching and developing mega-infrastructure case studies for classroom teaching and training." 
        />
      </SimpleGrid>

      {/* Detailed Course Grid */}
      <Box mb={12}>
        <Heading size="lg" mb={6} color="blue.800" borderBottom="2px solid" borderColor="gray.100" pb={2}>
          Subjects Handled (NIT Trichy)
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
          <CourseItem name="CEPE13 Construction Management" degree="B.Tech" count="~93 Students" />
          <CourseItem name="HSIR14 Professional Ethics" degree="B.Tech" count="~125 Students" />
          <CourseItem name="CE755 Lean Construction Concepts" degree="M.Tech" count="~32 Students" />
          <CourseItem name="CE772 Project Risk Analysis" degree="M.Tech" count="~33 Students" />
          <CourseItem name="CE756 Construction Methods & Equipment" degree="M.Tech" count="30 Students" />
          <CourseItem name="CE752 Quality & Safety Management" degree="M.Tech" count="30 Students (Jan 2026)" />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

// Reusable Components defined at the bottom
const MethodCard = ({ icon, title, desc }) => (
  <Box p={6} bg="white" borderRadius="xl" boxShadow="sm" border="1px solid" borderColor="gray.100">
    <Flex align="center" mb={3}>
      <Icon as={icon} color="blue.500" w={5} h={5} mr={3} />
      <Text fontWeight="bold" color="blue.900">{title}</Text>
    </Flex>
    <Text fontSize="sm" color="gray.600" lineHeight="tall">{desc}</Text>
  </Box>
);

const CourseItem = ({ name, degree, count }) => (
  <Flex p={4} bg="blue.50" borderRadius="lg" justify="space-between" align="center">
    <Box>
      <Text fontWeight="bold" fontSize="sm">{name}</Text>
      <Badge colorScheme="blue" variant="outline" fontSize="10px">{degree}</Badge>
    </Box>
    <Text fontSize="xs" fontWeight="bold" color="blue.700">{count}</Text>
  </Flex>
);

export default Teaching;



// // import React from 'react';
// import { Box, Heading, Text, SimpleGrid, Badge, Flex, Icon } from '@chakra-ui/react';
// import { FaGamepad, FaBookOpen } from 'react-icons/fa';

// const Teaching = () => {
//   return (
//     <Box>
//       <Heading size="2xl" mb={4} color="#0a192f">Teaching & Pedagogy</Heading>
//       <Text fontSize="lg" color="gray.600" mb={10}>
//         Bridging theory with real-world construction practices through experiential learning and industry-integrated training.
//       </Text>

//       {/* Methodology Section */}
//       <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mb={12}>
//         <MethodCard 
//           icon={FaGamepad} 
//           title="Experiential Learning" 
//           desc="Conducting serious games and simulations to enable hands-on understanding of project constraints." 
//         />
//         <MethodCard 
//           icon={FaBookOpen} 
//           title="Case-Based Discussion" 
//           desc="Researching and developing mega-infrastructure case studies for classroom teaching and training." 
//         />
//       </SimpleGrid>

//       {/* Detailed Course Grid */}
//       <Box mb={12}>
//         <Heading size="lg" mb={6} color="blue.800" borderBottom="2px solid" borderColor="gray.100" pb={2}>
//           Subjects Handled (NIT Trichy)
//         </Heading>
//         <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
//           <CourseItem name="CEPE13 Construction Management" degree="B.Tech" count="~93 Students" />
//           <CourseItem name="HSIR14 Professional Ethics" degree="B.Tech" count="~125 Students" />
//           <CourseItem name="CE755 Lean Construction Concepts" degree="M.Tech" count="~32 Students" />
//           <CourseItem name="CE772 Project Risk Analysis" degree="M.Tech" count="~33 Students" />
//           <CourseItem name="CE756 Construction Methods & Equipment" degree="M.Tech" count="30 Students" />
//           <CourseItem name="CE752 Quality & Safety Management" degree="M.Tech" count="30 Students (Jan 2026)" />
//         </SimpleGrid>
//       </Box>
//     </Box>
//   );
// };

// // Reusable Components defined at the bottom
// const MethodCard = ({ icon, title, desc }) => (
//   <Box p={6} bg="white" borderRadius="xl" boxShadow="sm" border="1px solid" borderColor="gray.100">
//     <Flex align="center" mb={3}>
//       <Icon as={icon} color="blue.500" w={5} h={5} mr={3} />
//       <Text fontWeight="bold" color="blue.900">{title}</Text>
//     </Flex>
//     <Text fontSize="sm" color="gray.600" lineHeight="tall">{desc}</Text>
//   </Box>
// );

// const CourseItem = ({ name, degree, count }) => (
//   <Flex p={4} bg="blue.50" borderRadius="lg" justify="space-between" align="center">
//     <Box>
//       <Text fontWeight="bold" fontSize="sm">{name}</Text>
//       <Badge colorScheme="blue" variant="outline" fontSize="10px">{degree}</Badge>
//     </Box>
//     <Text fontSize="xs" fontWeight="bold" color="blue.700">{count}</Text>
//   </Flex>
// );

// export default Teaching;



import React from 'react';
import { Box, Heading, Text, SimpleGrid, Badge, Flex, Icon, VStack } from '@chakra-ui/react';
import { FaGamepad, FaBookOpen } from 'react-icons/fa';

// Reusable Components defined at the top for clarity
const MethodCard = ({ icon, title, desc }) => (
  <Box p={8} bg="white" borderRadius="2xl" boxShadow="xl" border="1px solid" borderColor="gray.100">
    <Flex align="center" mb={4}>
      <Icon as={icon} color="blue.500" w={6} h={6} mr={4} />
      <Text fontWeight="800" fontSize={{ base: "lg", lg: "2xl" }} color="blue.900">{title}</Text>
    </Flex>
    <Text fontSize={{ base: "md", lg: "lg" }} color="gray.600" lineHeight="tall">{desc}</Text>
  </Box>
);

const CourseItem = ({ name, degree, count }) => (
  <Flex 
    p={6} 
    bg="blue.50" 
    borderRadius="xl" 
    justify="space-between" 
    align="center"
    border="1px solid"
    borderColor="blue.100"
  >
    <Box>
      <Text fontWeight="bold" fontSize={{ base: "md", lg: "xl" }} color="gray.800">{name}</Text>
      <Badge colorScheme="blue" variant="solid" px={3} py={1} borderRadius="full" fontSize={{ base: "10px", lg: "xs" }}>
        {degree}
      </Badge>
    </Box>
    <VStack align="end" spacing={0}>
      <Text fontSize={{ base: "sm", lg: "md" }} fontWeight="800" color="blue.700">{count}</Text>
      <Text fontSize="10px" color="gray.500" textTransform="uppercase">Enrollment</Text>
    </VStack>
  </Flex>
);

const Teaching = () => {
  return (
    <Box>
      <Heading size={{ base: "xl", lg: "2xl" }} mb={6} color="#0a192f">Teaching & Pedagogy</Heading>
      <Text fontSize={{ base: "md", lg: "xl" }} color="gray.600" mb={12} lineHeight="tall">
        Bridging the gap between theoretical project management and real-world construction practices 
        through experiential learning and industry-integrated training.
      </Text>

      {/* Methodology Section */}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mb={16}>
        <MethodCard 
          icon={FaGamepad} 
          title="Experiential Learning" 
          desc="Conducting serious games and simulations to enable hands-on understanding of project constraints and team dynamics." 
        />
        <MethodCard 
          icon={FaBookOpen} 
          title="Case-Based Discussion" 
          desc="Researching and developing mega-infrastructure case studies on large projects for classroom teaching and professional training." 
        />
      </SimpleGrid>

      {/* Detailed Course Grid */}
      <Box mb={12}>
        <Heading 
          size={{ base: "md", lg: "lg" }} 
          mb={8} 
          color="blue.800" 
          borderBottom="2px solid" 
          borderColor="gray.100" 
          pb={4}
          textTransform="uppercase"
          letterSpacing="widest"
        >
          Subjects Handled (NIT Trichy)
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          <CourseItem name="CEPE13 Construction Management" degree="B.Tech" count="93 Students" />
          <CourseItem name="HSIR14 Professional Ethics" degree="B.Tech" count="125 Students" />
          <CourseItem name="CE755 Lean Construction" degree="M.Tech" count="32 Students" />
          <CourseItem name="CE772 Project Risk Analysis" degree="M.Tech" count="33 Students" />
          <CourseItem name="CE756 Construction Methods" degree="M.Tech" count="30 Students" />
          <CourseItem name="CE752 Quality & Safety Management" degree="M.Tech" count="30 Students" />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Teaching;
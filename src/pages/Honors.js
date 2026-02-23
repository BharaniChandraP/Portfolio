// // import React from 'react';
// import { Box, Heading, Text, VStack, SimpleGrid, Badge, Flex } from '@chakra-ui/react';
// // import { FaTrophy, FaBriefcase } from 'react-icons/fa';

// const HonorItem = ({ role, org }) => (
//   <Flex p={4} bg="gray.50" borderRadius="md" justify="space-between" align="center">
//     <Text fontWeight="bold" fontSize="sm">{role}</Text>
//     <Badge colorScheme="blue">{org}</Badge>
//   </Flex>
// );

// const Honors = () => {
//   return (
//     <Box>
//       <Heading size="2xl" mb={10} color="#0a192f">Professional Impact & Leadership</Heading>

//       {/* Industry Leadership */}
//       <Box mb={16}>
//         <Heading size="lg" mb={6} color="blue.800" borderBottom="2px solid" borderColor="gray.100" pb={2}>
//           Industrial Leadership
//         </Heading>
//         <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
//           <Box p={6} bg="white" borderRadius="xl" boxShadow="md" borderLeft="6px solid" borderColor="blue.900">
//             <Text fontWeight="bold" fontSize="lg">Program Manager - EPPC Initiative</Text>
//             <Text fontSize="sm" color="gray.600" mt={2}>Managed training for ~2,500 construction engineers at L&T Limited (2023-24).</Text>
//           </Box>
//           <Box p={6} bg="white" borderRadius="xl" boxShadow="md" borderLeft="6px solid" borderColor="blue.500">
//             <Text fontWeight="bold" fontSize="lg">Industrial Consultancy</Text>
//             <Text fontSize="sm" color="gray.600" mt={2}>Developing role-based competency frameworks for Tata Projects Limited.</Text>
//           </Box>
//         </SimpleGrid>
//       </Box>

//       {/* Conference Leadership */}
//       <Box mb={16}>
//         <Heading size="lg" mb={6} color="blue.800" borderBottom="2px solid" borderColor="gray.100" pb={2}>
//           International Conference Service
//         </Heading>
//         <VStack align="stretch" spacing={4}>
//           <HonorItem role="Technical Committee-Lead" org="Indian Lean Construction Conference (ILCC) 2025" />
//           <HonorItem role="Conference Co-Chair" org="COSVARD 2025 (with University of Melbourne)" />
//           <HonorItem role="Technical Committee" org="ICCRIP 2025 (NICMAR University)" />
//         </VStack>
//       </Box>
//     </Box>
//   );
// };

// export default Honors;


import React from 'react';
import { Box, Heading, Text, VStack, SimpleGrid, Badge, Flex, Icon } from '@chakra-ui/react';
import { FaTrophy, FaBriefcase, FaGlobe } from 'react-icons/fa';

const HonorItem = ({ role, org }) => (
  <Flex 
    p={6} 
    bg="gray.50" 
    borderRadius="xl" 
    justify="space-between" 
    align="center" 
    border="1px solid" 
    borderColor="gray.100"
    _hover={{ bg: "blue.50", borderColor: "blue.100" }}
    transition="0.2s"
  >
    <Text fontWeight="bold" fontSize={{ base: "md", lg: "xl" }} color="gray.800">{role}</Text>
    <Badge colorScheme="blue" variant="solid" px={4} py={1} borderRadius="full" fontSize={{ base: "xs", lg: "sm" }}>
      {org}
    </Badge>
  </Flex>
);

const Honors = () => {
  return (
    <Box>
      <Heading size={{ base: "xl", lg: "2xl" }} mb={12} color="#0a192f">Professional Impact & Leadership</Heading>

      {/* Industry Leadership */}
      <Box mb={20}>
        <Flex align="center" mb={8}>
          <Icon as={FaBriefcase} color="blue.600" w={6} h={6} mr={4} />
          <Heading size={{ base: "md", lg: "lg" }} color="blue.900" textTransform="uppercase" letterSpacing="widest">
            Industrial Leadership
          </Heading>
        </Flex>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          <Box p={10} bg="white" borderRadius="2xl" boxShadow="xl" borderLeft="8px solid" borderColor="blue.900">
            <Text fontWeight="800" fontSize={{ base: "lg", lg: "2xl" }} color="#0a192f">
              Program Manager - EPPC Initiative
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color="gray.600" mt={4} lineHeight="tall">
              Led the "Essentials of Project Planning and Control" initiative at L&T Limited, 
              managing the professional upskilling of ~2,500 construction engineers.
            </Text>
          </Box>

          <Box p={10} bg="white" borderRadius="2xl" boxShadow="xl" borderLeft="8px solid" borderColor="blue.500">
            <Text fontWeight="800" fontSize={{ base: "lg", lg: "2xl" }} color="#0a192f">
              Industrial Consultancy
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color="gray.600" mt={4} lineHeight="tall">
              Directing technical consultancy for Tata Projects Limited to develop role-based 
              competency frameworks for mega-infrastructure delivery.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Conference Leadership */}
      <Box mb={16}>
        <Flex align="center" mb={8}>
          <Icon as={FaGlobe} color="blue.600" w={6} h={6} mr={4} />
          <Heading size={{ base: "md", lg: "lg" }} color="blue.900" textTransform="uppercase" letterSpacing="widest">
            International Conference Service
          </Heading>
        </Flex>
        
        <VStack align="stretch" spacing={6}>
          <HonorItem role="Technical Committee-Lead" org="ILCC 2025" />
          <HonorItem role="Conference Co-Chair" org="COSVARD 2025" />
          <HonorItem role="Technical Committee" org="ICCRIP 2025" />
        </VStack>
      </Box>
    </Box>
  );
};

export default Honors;
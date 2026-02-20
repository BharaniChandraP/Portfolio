import React from 'react';
import { Box, Heading, Text, VStack, SimpleGrid, Badge, Flex, Icon } from '@chakra-ui/react';
import { FaTrophy, FaBriefcase } from 'react-icons/fa';

const HonorItem = ({ role, org }) => (
  <Flex p={4} bg="gray.50" borderRadius="md" justify="space-between" align="center">
    <Text fontWeight="bold" fontSize="sm">{role}</Text>
    <Badge colorScheme="blue">{org}</Badge>
  </Flex>
);

const Honors = () => {
  return (
    <Box>
      <Heading size="2xl" mb={10} color="#0a192f">Professional Impact & Leadership</Heading>

      {/* Industry Leadership */}
      <Box mb={16}>
        <Heading size="lg" mb={6} color="blue.800" borderBottom="2px solid" borderColor="gray.100" pb={2}>
          Industrial Leadership
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          <Box p={6} bg="white" borderRadius="xl" boxShadow="md" borderLeft="6px solid" borderColor="blue.900">
            <Text fontWeight="bold" fontSize="lg">Program Manager - EPPC Initiative</Text>
            <Text fontSize="sm" color="gray.600" mt={2}>Managed training for ~2,500 construction engineers at L&T Limited (2023-24).</Text>
          </Box>
          <Box p={6} bg="white" borderRadius="xl" boxShadow="md" borderLeft="6px solid" borderColor="blue.500">
            <Text fontWeight="bold" fontSize="lg">Industrial Consultancy</Text>
            <Text fontSize="sm" color="gray.600" mt={2}>Developing role-based competency frameworks for Tata Projects Limited.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Conference Leadership */}
      <Box mb={16}>
        <Heading size="lg" mb={6} color="blue.800" borderBottom="2px solid" borderColor="gray.100" pb={2}>
          International Conference Service
        </Heading>
        <VStack align="stretch" spacing={4}>
          <HonorItem role="Technical Committee-Lead" org="Indian Lean Construction Conference (ILCC) 2025" />
          <HonorItem role="Conference Co-Chair" org="COSVARD 2025 (with University of Melbourne)" />
          <HonorItem role="Technical Committee" org="ICCRIP 2025 (NICMAR University)" />
        </VStack>
      </Box>
    </Box>
  );
};

export default Honors;
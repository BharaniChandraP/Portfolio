// import React from 'react';
// import { 
//   Box, VStack, Heading, Text, SimpleGrid, Flex, 
//   Badge, Stack, Button, Link, HStack, Icon 
// } from '@chakra-ui/react';
// import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
// import { SiGooglescholar } from 'react-icons/si';

// const Home = () => {
//   return (
//     <Box>
//       {/* Hero Section */}
//       <VStack align={{ base: "center", md: "start" }} spacing={4} mb={10} textAlign={{ base: "center", md: "left" }}>
//         <Box>
//           <Heading size={{ base: "xl", md: "2xl" }} color="#0a192f" fontWeight="800">
//             Santhosh Loganathan, <Text as="span" color="blue.600">Ph.D.</Text>
//           </Heading>
//           <Text fontSize={{ base: "md", md: "xl" }} fontWeight="bold" color="gray.600" mt={2}>
//             Assistant Professor | Construction Technology & Project Management
//           </Text>
//           <Text color="gray.500" fontWeight="medium">National Institute of Technology Tiruchirappalli</Text>
//         </Box>

//         {/* Professional Links */}
//         <Stack direction="row" spacing={4} pt={2}>
//           <Button 
//             as="a" 
//             href="https://scholar.google.com/citations?user=MSQauoMAAAAJ&hl=en&oi=ao" 
//             target="_blank" 
//             leftIcon={<SiGooglescholar />} 
//             colorScheme="blue" 
//             variant="outline" 
//             size="sm"
//           >
//             Google Scholar
//           </Button>
//           <Button 
//             as="a" 
//             href="https://www.linkedin.com/in/santhosh-loganathan-ph-d-46993252/" 
//             target="_blank" 
//             leftIcon={<FaLinkedin />} 
//             colorScheme="linkedin" 
//             variant="outline" 
//             size="sm"
//           >
//             LinkedIn
//           </Button>
//         </Stack>
//       </VStack>

//       {/* Impact Stats Dashboard */}
//       <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6} mb={12}>
//         <StatCard val="2,500+" label="Engineers Trained" sub="L&T IPM Initiative" />
//         <StatCard val="13+" label="Refereed Articles" sub="Scopus Indexed" />
//         <StatCard val="20+" label="Students Guided" sub="B.Tech, M.Tech & PhD" />
//       </SimpleGrid>

//       {/* Education & Experience Grid */}
//       <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} mb={16}>
//         <Box>
//           <Heading size="md" mb={6} color="blue.800" borderLeft="4px solid" borderColor="blue.500" pl={3}>
//             Education
//           </Heading>
//           <VStack align="stretch" spacing={6}>
//             <EduItem title="Joint Ph.D." place="IIT Madras & University of Technology Sydney" note="Awarded 2023 | 8.54/10 CGPA" />
//             <EduItem title="M.E. (CEM)" place="Anna University" note="University 2nd Rank Holder" />
//             <EduItem title="B.E. (Civil)" place="Anna University" note="University 25th Rank Holder" />
//           </VStack>
//         </Box>

//         <Box>
//           <Heading size="md" mb={6} color="blue.800" borderLeft="4px solid" borderColor="blue.500" pl={3}>
//             Recent Roles
//           </Heading>
//           <VStack align="stretch" spacing={4}>
//             <Box p={4} borderRadius="lg" bg="white" border="1px solid" borderColor="gray.100" boxShadow="sm">
//               <Text fontWeight="bold">Assistant Professor</Text>
//               <Text color="blue.600" fontSize="sm">NIT Trichy | 2024 - Present</Text>
//             </Box>
//             <Box p={4} borderRadius="lg" bg="white" border="1px solid" borderColor="gray.100" boxShadow="sm">
//               <Text fontWeight="bold">Asst. Professor / Program Manager</Text>
//               <Text color="blue.600" fontSize="sm">L&T Institute of Project Management</Text>
//               <Text fontSize="xs" color="gray.500" mt={1}>Trained ~2,500 construction professionals</Text>
//             </Box>
//           </VStack>
//         </Box>
//       </SimpleGrid>

//       {/* Contact Footer Section */}
//       <Box pt={10} borderTop="1px solid" borderColor="gray.200">
//         <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
//           <Box>
//             <Heading size="md" mb={4} color="blue.900">Contact Details</Heading>
//             <VStack align="start" spacing={3} fontSize="sm" color="gray.600">
//               <HStack><Icon as={FaMapMarkerAlt} color="blue.500"/><Text>21/22, New Avenue, NIT Trichy Quarters, TN - 620015</Text></HStack>
//               <HStack><Icon as={FaEnvelope} color="blue.500"/><Text>santomaills@gmail.com</Text></HStack>
//               <HStack><Icon as={FaPhoneAlt} color="blue.500"/><Text>+91 98400 68351</Text></HStack>
//             </VStack>
//           </Box>
//           <Box textAlign={{ base: "left", md: "right" }}>
//             <Heading size="md" mb={4} color="blue.900">Research Identifiers</Heading>
//             <VStack align={{ base: "start", md: "end" }} spacing={2}>
//                <Link href="https://scholar.google.com/citations?user=MSQauoMAAAAJ" isExternal color="blue.600" fontSize="sm">Google Scholar Profile</Link>
//                <Link href="https://www.linkedin.com/in/santhosh-loganathan-ph-d-46993252/" isExternal color="blue.600" fontSize="sm">LinkedIn Profile</Link>
//             </VStack>
//           </Box>
//         </SimpleGrid>
//       </Box>
//     </Box>
//   );
// };

// const StatCard = ({ val, label, sub }) => (
//   <Box p={8} bg="white" borderRadius="2xl" boxShadow="sm" textAlign="center" border="1px solid" borderColor="gray.50">
//     <Heading size="2xl" color="blue.700" mb={1}>{val}</Heading>
//     <Text fontSize="xs" fontWeight="bold" color="gray.700" textTransform="uppercase">{label}</Text>
//     <Text fontSize="10px" color="gray.400" mt={1}>{sub}</Text>
//   </Box>
// );

// const EduItem = ({ title, place, note }) => (
//   <Box>
//     <Text fontWeight="bold" fontSize="sm" color="gray.800">{title}</Text>
//     <Text fontSize="xs" color="blue.600" fontWeight="medium">{place}</Text>
//     <Badge mt={1} colorScheme="blue" variant="subtle" fontSize="10px">{note}</Badge>
//   </Box>
// );

// export default Home;



// import React from 'react';
import { 
  Box, VStack, Heading, Text, SimpleGrid, Flex, 
  Badge, Stack, Button, HStack, Icon, Image 
} from '@chakra-ui/react';
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

const Home = () => {
  return (
    <Box>
      {/* Hero Section with Photo and Intro */}
      <Flex 
        direction={{ base: "column", md: "row" }} 
        align="center" 
        mb={12} 
        gap={{ base: 8, md: 12 }}
      >
        {/* Profile Picture */}
        <Box 
          flexShrink={0} 
          borderRadius="2xl" 
          overflow="hidden" 
          boxShadow="2xl" 
          border="4px solid" 
          borderColor="blue.500"
        >
          {/* Replace 'profile.jpg' with your actual image path */}
          <Image 
            src="profile.jpg" 
            alt="Santhosh Loganathan" 
            fallbackSrc="https://via.placeholder.com/300x350"
            w={{ base: "250px", md: "300px" }}
            h="auto"
            objectFit="cover"
          />
        </Box>

        {/* Intro Text */}
        <VStack align={{ base: "center", md: "start" }} spacing={4} textAlign={{ base: "center", md: "left" }}>
          <Box>
            <Heading size="2xl" color="#0a192f" fontWeight="800">
              Santhosh Loganathan, <Text as="span" color="blue.600">Ph.D.</Text>
            </Heading>
            <Text fontSize="xl" fontWeight="bold" color="gray.600" mt={1}>
              Assistant Professor | Construction Technology & Project Management 
            </Text>
            <Text color="gray.500" fontWeight="medium">National Institute of Technology Tiruchirappalli </Text>
          </Box>

          <Text fontSize="md" color="gray.700" lineHeight="tall">
            University lecturer with over 5.5 years of academic and industry-integrated experience. 
            I specialize in bridging the gap between theoretical project management and real-world 
            construction practices through case studies and experiential learning.
          </Text>

          <Stack direction="row" spacing={4}>
            <Button 
              as="a" 
              href="https://scholar.google.com/citations?user=MSQauoMAAAAJ" 
              target="_blank" 
              leftIcon={<SiGooglescholar />} 
              colorScheme="blue" 
              size="sm"
            >
              Scholar Profile
            </Button>
            <Button 
              as="a" 
              href="https://www.linkedin.com/in/santhosh-loganathan-ph-d-46993252/" 
              target="_blank" 
              leftIcon={<FaLinkedin />} 
              colorScheme="linkedin" 
              variant="outline" 
              size="sm"
            >
              LinkedIn
            </Button>
          </Stack>
        </VStack>
      </Flex>

      {/* Impact Stats */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6} mb={16}>
        <StatCard val="2,500+" label="Engineers Trained" sub="L&T IPM Initiative " />
        <StatCard val="13+" label="Research Articles" sub="Published since 2024" />
        <StatCard val="NIT #9" label="Institutional Rank" sub="NIRF 2025 Ranking" />
      </SimpleGrid>

      {/* Areas of Expertise Section */}
      <Box mb={16}>
        <Heading size="lg" mb={8} color="blue.800" borderLeft="4px solid" borderColor="blue.500" pl={3}>
          Core Areas of Expertise 
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6}>
          <ExpertiseItem text="Lean Construction " />
          <ExpertiseItem text="Project Risk Management " />
          <ExpertiseItem text="Construction Quality & Safety " />
          <ExpertiseItem text="BIM & Construction 4.0 " />
          <ExpertiseItem text="Project Planning & Control " />
          <ExpertiseItem text="Sustainable Construction " />
        </SimpleGrid>
      </Box>

      {/* Education & Experience */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} mb={16}>
        <Box>
          <Heading size="md" mb={6} color="blue.800">Academic Background </Heading>
          <VStack align="stretch" spacing={6}>
            <EduItem title="Joint Ph.D." place="IIT Madras & Univ. of Technology Sydney " note="8.54/10 CGPA" />
            <EduItem title="M.E. (CEM)" place="Anna University " note="University 2nd Rank Holder" />
            <EduItem title="B.E. (Civil)" place="Anna University " note="University 25th Rank Holder" />
          </VStack>
        </Box>

        <Box>
          <Heading size="md" mb={6} color="blue.800">Professional Experience </Heading>
          <VStack align="stretch" spacing={4}>
            <Box p={4} borderRadius="lg" bg="white" border="1px solid" borderColor="gray.100" boxShadow="sm">
              <Text fontWeight="bold">Assistant Professor </Text>
              <Text color="blue.600" fontSize="sm">NIT Trichy | 2024 - Present </Text>
            </Box>
            <Box p={4} borderRadius="lg" bg="white" border="1px solid" borderColor="gray.100" boxShadow="sm">
              <Text fontWeight="bold">Program Manager / Asst. Professor </Text>
              <Text color="blue.600" fontSize="sm">Larsen & Toubro Limited | 2023 - 2024 </Text>
            </Box>
          </VStack>
        </Box>
      </SimpleGrid>

      {/* Footer Contact */}
      <Box pt={10} borderTop="1px solid" borderColor="gray.200">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          <Box>
            <Heading size="md" mb={4} color="blue.900">Contact </Heading>
            <VStack align="start" spacing={3} fontSize="sm" color="gray.600">
              <HStack><Icon as={FaMapMarkerAlt} color="blue.500"/><Text>NIT Trichy Quarters, TN - 620015 </Text></HStack>
              <HStack><Icon as={FaEnvelope} color="blue.500"/><Text>santomaills@gmail.com </Text></HStack>
              <HStack><Icon as={FaPhoneAlt} color="blue.500"/><Text>+91 98400 68351 </Text></HStack>
            </VStack>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

// Internal Components
const StatCard = ({ val, label, sub }) => (
  <Box p={6} bg="blue.900" color="white" borderRadius="2xl" textAlign="center">
    <Heading size="xl" mb={1}>{val}</Heading>
    <Text fontSize="xs" fontWeight="bold" textTransform="uppercase">{label}</Text>
    <Text fontSize="10px" opacity="0.8" mt={1}>{sub}</Text>
  </Box>
);

const EduItem = ({ title, place, note }) => (
  <Box>
    <Text fontWeight="bold" fontSize="sm" color="gray.800">{title}</Text>
    <Text fontSize="xs" color="blue.600" fontWeight="medium">{place}</Text>
    <Badge mt={1} colorScheme="blue" variant="subtle" fontSize="10px">{note}</Badge>
  </Box>
);

const ExpertiseItem = ({ text }) => (
  <HStack spacing={3}>
    <Icon as={FaCheckCircle} color="green.500" />
    <Text fontSize="sm" color="gray.700" fontWeight="medium">{text}</Text>
  </HStack>
);

export default Home;
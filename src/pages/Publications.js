import React from 'react';
import { Box, Heading, VStack, Text, SimpleGrid, Icon, Link, Badge, Flex, Button } from '@chakra-ui/react';
import { FaExternalLinkAlt, FaBook, FaGlobe, FaMicroscope, FaAward, FaFilePdf } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

const Research = () => {
  return (
    <Box>
      <Flex justify="space-between" align="center" mb={10} wrap="wrap" gap={4}>
        <Box>
          <Heading size="2xl" color="#0a192f">Research & Publications</Heading>
          <Text color="gray.600" mt={2}>Complete bibliography including Journals, Books, and Industry Reports</Text>
        </Box>
        <Link href="https://scholar.google.com/citations?user=MSQauoMAAAAJ&hl=en" target="_blank">
          <Button colorScheme="blue" leftIcon={<SiGooglescholar />} size="md">
            Google Scholar
          </Button>
        </Link>
      </Flex>

      <VStack align="stretch" spacing={12}>
        {/* Journal Publications */}
        <Box>
          <SectionHeader title="International Journals" icon={FaMicroscope} />
          <VStack align="stretch" spacing={4}>
             <PubItem 
               title="Claused or confused: how force majeure complicates contractual clarity" 
               sub="Emerald Emerging Markets Case Studies (2025)" 
               link="https://doi.org/10.1108/EEMCS-12-2024-0539" 
             />
             <PubItem 
               title="Production-oriented approach for CLT buildings" 
               sub="Engineering, Construction and Architectural Management (2025)" 
               link="https://doi.org/10.1108/ECAM-10-2023-1064" 
             />
             <PubItem 
               title="Occupational stress and work-life balance among Indian professionals" 
               sub="Construction Economics and Building (2022)" 
               link="https://doi.org/10.5130/AJCEB.v22i2.8052" 
             />
             <PubItem 
               title="Unravelling the influence of teamwork on trade crew productivity" 
               sub="Construction Management and Economics (2020)" 
               link="https://doi.org/10.1080/01446193.2020.1795900" 
             />
             <PubItem 
               title="Work practices of onsite construction crews and their influence" 
               sub="Construction Economics and Building (2018)" 
               link="https://doi.org/10.5130/AJCEB.v18i3.5973" 
             />
             <PubItem 
               title="Developing a clients’ charter and construction project KPIs" 
               sub="Built Environment Project and Asset Management (2017)" 
               link="https://doi.org/10.1108/BEPAM-02-2017-0013" 
             />
             <PubItem 
               title="Identifying and addressing critical issues in the Indian construction industry" 
               sub="Journal of Construction in Developing Countries (2017)" 
               link="https://doi.org/10.21315/jcdc2017.22.supp1.7" 
             />
          </VStack>
        </Box>

        {/* Books & Chapters */}
        <Box>
          <SectionHeader title="Books & Edited Volumes" icon={FaBook} />
          <VStack align="stretch" spacing={4}>
            <PubItem 
              title="L&T Body of Knowledge Case Studies: Volume I (Editor)"
              sub="Taylor & Francis CRC Press (2024)"
              link="https://www.lntipm.org/knowledge-resources/lt-body-of-knowledge-lt-bok"
            />
            <PubItem 
              title="Sustainable Site Development and Selection Practices"
              sub="Handbook of Construction Project Management, Springer (2025)"
              link="https://link.springer.com/rwe/10.1007/978-981-96-7631-6_46"
            />
            <PubItem 
              title="Policies and Priorities for High-Quality Infrastructure"
              sub="Frontiers in High-Speed Rail Development, ADBI (2021)"
              link="https://www.adb.org/publications/frontiers-high-speed-rail-development"
            />
            <PubItem 
              title="Impact of Digitalization in Organizational Learning"
              sub="Innovations in Teaching and Learning (2021)"
              link="https://academic.jozacpublishers.com/index.php/books/catalog/view/2/10/23"
            />
          </VStack>
        </Box>

        {/* Industry Reports */}
        <Box>
          <SectionHeader title="Industry Research Reports" icon={FaFilePdf} />
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
            <ReportCard 
              title="Mental Health: Where do we start?" 
              org="CII USA & Univ of Colorado Boulder (2023)" 
              link="https://www.construction-institute.org/resources/knowledgebase/10-10-metrics/result/topics/rt-401"
            />
            <ReportCard 
              title="How to deliver quality ‘Housing for All’" 
              org="IIT Madras & Australia-India Council (2019)" 
              link="https://bit.ly/33MglxT"
            />
            <ReportCard 
              title="KPIs for Indian Construction Industry" 
              org="Action Team-1, Ci3 India (2015)" 
              link="https://ci3.co.in/draft_whitepapers.html"
            />
            <ReportCard 
              title="Regional Developers’ Roundtable Reports" 
              org="Ci3 India Roundtables (2016)" 
              link="https://ci3.co.in/reports.html"
            />
          </SimpleGrid>
        </Box>

        {/* Conference Papers */}
        <Box>
          <SectionHeader title="Awarded Conference Papers" icon={FaAward} />
          <VStack align="stretch" spacing={4}>
            <Box p={4} bg="yellow.50" borderRadius="lg" border="1px solid" borderColor="yellow.200">
               <Badge colorScheme="yellow" mb={2}>Best Jury Paper Award</Badge>
               <Text fontWeight="bold">Labor sub-contracting issues in the Indian construction industry</Text>
               <Text fontSize="sm" color="gray.600">PMI Research and Academic Conference, IIT Delhi (2017)</Text>
            </Box>
            <PubItem 
              title="Absenteeism and turnover of migrant construction workers" 
              sub="Construction Research Congress (ASCE), San Juan (2016)"
              link="https://ascelibrary.org/doi/abs/10.1061/9780784479827.179"
            />
            <PubItem 
              title="Digitalising lean construction with Construction 4.0" 
              sub="Indian Lean Construction Conference (2021)"
              link="https://www.ilce.in/ilce_conferences/indian-lean-construction-conference-ilcc-2021-reinventing-with-lean-post-covid/"
            />
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

const SectionHeader = ({ title, icon }) => (
  <Flex align="center" mb={6} borderBottom="2px solid" borderColor="blue.50" pb={2}>
    <Box color="blue.600" mr={3} fontSize="20px"><Icon as={icon} /></Box>
    <Heading size="md" color="blue.900" textTransform="uppercase" letterSpacing="widest">{title}</Heading>
  </Flex>
);

const PubItem = ({ title, sub, link }) => (
  <Box p={4} borderRadius="lg" _hover={{ bg: "blue.50" }} transition="0.2s">
    <Text fontWeight="bold" fontSize="md" color="gray.800">{title}</Text>
    <Text fontSize="sm" color="blue.600" mb={1}>{sub}</Text>
    {link && (
      <Link href={link} isExternal fontSize="xs" color="gray.400" fontWeight="bold">
        VIEW PUBLICATION <FaExternalLinkAlt style={{display: 'inline', marginLeft: '4px'}} />
      </Link>
    )}
  </Box>
);

const ReportCard = ({ title, org, link }) => (
  <Box p={4} bg="gray.50" borderRadius="xl" border="1px solid" borderColor="gray.100">
    <Text fontWeight="bold" fontSize="sm" color="gray.700" mb={1}>{title}</Text>
    <Text fontSize="xs" color="gray.500" mb={3}>{org}</Text>
    <Link href={link} isExternal color="blue.600" fontSize="xs" fontWeight="bold">
      ACCESS REPORT <FaExternalLinkAlt style={{display: 'inline', marginLeft: '4px'}} />
    </Link>
  </Box>
);

export default Research;
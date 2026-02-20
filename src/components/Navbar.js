import React from 'react';
import { Flex, Box, Heading, Spacer, Stack, Button, Container } from '@chakra-ui/react';

const Navbar = ({ setView, activeView }) => {
  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Research', id: 'publications' },
    { label: 'Teaching', id: 'teaching' },
    { label: 'Students', id: 'students' },
    { label: 'Honors', id: 'honors' },
  ];

  return (
    <Box 
      as="nav" 
      bg="#0a192f" 
      color="white" 
      position="fixed" 
      w="100%" 
      top={0} 
      zIndex={100} 
      boxShadow="0 2px 10px rgba(0,0,0,0.3)"
    >
      <Container maxW="container.lg">
        <Flex 
          py={{ base: 3, md: 4 }} 
          align="center" 
          justify="space-between"
          direction={{ base: "column", sm: "row" }} // Stacks vertically on very small screens
        >
          <Box mb={{ base: 2, sm: 0 }}>
            <Heading 
              size={{ base: "xs", md: "sm" }} 
              letterSpacing="wider" 
              fontWeight="bold"
              textAlign={{ base: "center", sm: "left" }}
            >
              DR. SANTHOSH LOGANATHAN
            </Heading>
          </Box>

          <Spacer display={{ base: "none", sm: "block" }} />

          <Stack 
            direction="row" 
            spacing={{ base: 1, md: 4 }} 
            justify="center"
            w={{ base: "100%", sm: "auto" }}
          >
            {navLinks.map((link) => (
              <Button 
                key={link.id}
                variant="ghost" 
                size={{ base: "xs", md: "sm" }} 
                color="white" 
                px={{ base: 2, md: 4 }}
                bg={activeView === link.id ? "whiteAlpha.300" : "transparent"}
                _hover={{ bg: "whiteAlpha.200" }} 
                onClick={() => setView(link.id)}
                fontSize={{ base: "10px", md: "sm" }} // Shrinks text for tiny screens
              >
                {link.label}
              </Button>
            ))}
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
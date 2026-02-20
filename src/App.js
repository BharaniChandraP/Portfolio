import React, { useState } from 'react';
import { ChakraProvider, defaultSystem, Box, Container } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Teaching from './pages/Teaching';
import Students from './pages/Students';
import Honors from './pages/Honors'; // New Page Import

function App() {
  const [view, setView] = useState('home');

  return (
    <ChakraProvider value={defaultSystem}>
      <Box minH="100vh" bg="gray.50">
        {/* Pass the state to the Navbar to allow navigation */}
        <Navbar setView={setView} activeView={view} />
        
        {/* Responsive Container:
          pt="120px" prevents the content from being hidden behind the fixed navbar.
          px={{ base: 4, md: 8 }} ensures safe margins on mobile phones.
        */}
        <Container maxW="container.lg" pt={{ base: "100px", md: "120px" }} pb="60px" px={{ base: 4, md: 8 }}>
          {view === 'home' && <Home />}
          {view === 'publications' && <Publications />}
          {view === 'teaching' && <Teaching />}
          {view === 'students' && <Students />}
          {view === 'honors' && <Honors />}
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
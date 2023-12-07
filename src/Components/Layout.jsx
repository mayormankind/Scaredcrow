import React from 'react';
import { Flex } from '@chakra-ui/react';
import Footer from './Footer';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Portfolio from '../Pages/Portfolio';
import Home from '../Pages/Home';
import Services from '../Pages/Services';

function Layout() {
  return (
  <Flex justify='center' w='100%' h={'100%'} flexDir='column' overflowX={'hidden'}>
    <Home/>
    <About/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </Flex>
  )
}

export default Layout;
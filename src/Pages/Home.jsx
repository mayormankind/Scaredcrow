import { Flex, Box, Text, Button, keyframes } from '@chakra-ui/react'
import React, { useState } from 'react'
import Header from '../Components/Header';
import { FaArrowRight } from 'react-icons/fa'
import { Reveal } from '../Components/Reveal';

export default function Home() {
  const [ bckg, setBckg ] = useState('')
  const animate = keyframes`
    transform: translateX(0),
    transform: translateX(20px),
    transform: translateX(0),
  `;

  return (
    <Box w='100%' h='100vh' bg='url(images/bg.jpg)' bgPos='center' bgSize={'cover'} id='home'>
        <Flex flexDir={'column'} bg='rgba(0,0,0,0.6)' w='100%' h='100%'>
            <Header/>
            <Flex w='100%' align='center' flexDir='column' justify='center' h='70%' maxW='800px' m='auto' gap='20px' textAlign='center'>
              <Reveal>
                <Text fontSize={{sm:'45px', base:'30px'}} display={'flow'} color='white'>Hi there! My name is Samuel and I'm an <Text color='orange.300' as='span'>all-round designer</Text></Text>
              </Reveal>
              <Reveal>
                <Button colorScheme='orange' variant='outline' p='20px' rightIcon={<FaArrowRight/>} h='50px' borderRadius='20px' _hover={{bg:'black'}}>Download my CV</Button>
              </Reveal>
            </Flex>
        </Flex>
    </Box>
  )
}

import { Flex, Box, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import Header from '../Components/Header'

export default function Home() {
  const [ bckg, setBckg ] = useState('')
  const slideBackground = ()=>{
    
  }
  return (
    <Box w='100%' h='100vh' bg='url(images/bg.jpg)' bgPos='center' bgSize={'cover'} id='home'>
        <Flex flexDir={'column'} bg='rgba(0,0,0,0.6)' w='100%' h='100%'>
            <Header/>
            <Flex w='100%' align='center' flexDir='column' justify='center' h='70%' maxW='800px' m='auto' gap='20px' textAlign='center'>
                <Text fontSize={{sm:'45px', base:'30px'}} display={'flow'} color='white'>Hi there! My name is Samuel and I'm an <Text color='orange.300' as='span'>all-round designer</Text></Text>
                <Button bg='orange' p='20px' h='50px' borderRadius='20px' color='white' _hover={{bg:'black'}}>Download my CV</Button>
            </Flex>
        </Flex>
    </Box>
  )
}

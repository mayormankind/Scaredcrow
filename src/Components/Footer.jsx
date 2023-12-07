import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react';
import { RiArrowUpSFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <Box bg='black' color='white' p='20px 10px' fontSize='12px' w='100%' h='100%'>
        <Flex align='center' justify='space-between' w='100%' h='100%' maxW='1000px' mx='auto'>
          <Text>Copyright © 2023 Scared crow</Text>
          <Text as='a' href='#home' textTransform='uppercase'>Back to top <Icon fontSize='22px'><RiArrowUpSFill/></Icon></Text>
        </Flex> 
    </Box>
  )
}

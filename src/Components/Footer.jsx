import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react';
import { RiArrowUpSFill } from 'react-icons/ri';
import { Reveal } from './Reveal';

export default function Footer() {
  return (
    <Box bg='black' color='white' p='20px 10px' fontSize='12px' w='100%' h='100%'>
        <Flex align='center' justify='space-between' w='100%' h='100%' maxW='1000px' mx='auto'>
          <Reveal>
            <Text>Copyright © {new Date().getFullYear()} Scared crow</Text>
          </Reveal>
          <Reveal>
            <Button as='a' href='#home' variant={'link'} size='sm' fontSize='xs' color='white' rightIcon={<RiArrowUpSFill/>}>Back to top</Button>
          </Reveal>
        </Flex> 
    </Box>
  )
}

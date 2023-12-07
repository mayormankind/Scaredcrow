import { Icon, Box, Text, Flex } from '@chakra-ui/react'
import React from 'react';
import { RiArrowDownFill, RiArrowDownSFill } from 'react-icons/ri'

export default function Divider() {
  return (
    <Box w='100%' h='100%'>
        <Flex gap='10px' justify='space-between' w='100%' align='center' mb='25px' maxW='400px' mx='auto'>
            <Box w='40%' h='3px' bg='orange.200'></Box>
            <Icon color='orange' fontSize='24px'><RiArrowDownSFill/></Icon>
            <Box w='40%' h='3px' bg='gray'></Box>
        </Flex>

    </Box>
  )
}

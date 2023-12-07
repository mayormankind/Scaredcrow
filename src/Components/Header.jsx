import { HStack, Box, Text, Flex, IconButton } from '@chakra-ui/react'
import React, { useState } from 'react';
import {RiCloseFill,RiMenu3Fill} from 'react-icons/ri';

export default function Header() {
    const [ menu, setMenu ] = useState(false)
    const links=[
        {id:0,label:'About me',href:'#about'},
        {id:1,label:'My skills',href:'#skills'},
        {id:2,label:'Portfolio',href:'#portfolio'},
        {id:3,label:'Contacts',href:'#contact'},
    ]
  return (
    <Box p='20px' w='100%' mx='auto' maxW='1100px' color='white'>
        <Flex justify='space-between' align='center' w='100%' h='100%'>
            <Text fontWeight='bold' fontSize='20px'>Scared crow</Text>
            <Flex align={{sm:'end',base:'center'}} w={{sm:'40%',base:'100%'}} bg={{sm:'transparent',base:'rgb(0,0,0)'}} pos={{sm:'initial',base:'fixed'}} h='100%' top='0' left='0' zIndex={{sm:'10',base:'30'}} justify={{sm:'space-between',base:'space-around'}} flexDir={{sm:'row',base:'column'}} display={{sm:'flex', base:menu?'flex':'none'}}>
                {links.map(link=>(
                    <Text as='a' key={link.id} color='white' onClick={()=>setMenu(false)} href={link.href} _hover={{borderBottom:'1px solid orange'}}>{link.label}</Text>
                ))}
            </Flex>
            <IconButton color='white' fontSize='24px' zIndex='50' icon={<RiMenu3Fill/>} onClick={()=>setMenu(!menu)} variant='ghost' display={{sm:'none',base:'flex'}}/>
        </Flex>
    </Box>
  )
}

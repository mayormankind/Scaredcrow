import { HStack, Box, Text, Flex, IconButton, Fade, useDisclosure, SlideFade } from '@chakra-ui/react'
import React, { useState } from 'react';
import {RiCloseFill,RiMenu3Fill} from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Header({bg}) {
    const [ menu, setMenu ] = useState(false);
    const { isOpen, onToggle } = useDisclosure();
    const links=[
        {label:'Home',href:'/'},
        {label:'About me',href:'/about'},
        {label:'My skills',href:'/skills'},
        {label:'Portfolio',href:'/portfolio'},
        {label:'Contacts',href:'/#contact'},
    ]
    const handle = () =>{
        setMenu(!menu)
        onToggle()
    }
  return (
    <Box p='20px' w='100%' color='white' bg={bg?bg:'transparent'}>
        <Flex justify='space-between' align='center' w='100%' h='100%' mx='auto' maxW='1100px'>
            <Link to='/'><Text fontWeight='bold' fontSize='20px'>Scared crow</Text></Link>
            <SlideFade in={isOpen} display={{sm:'none',base:'flex'}}>
                <Flex align={{sm:'end',base:'center'}} w={{sm:'40%',base:'100%'}} bg={{sm:'transparent',base:'rgb(0,0,0)'}} pos={{sm:'initial',base:'fixed'}} h='100%' top='0' left='0' zIndex={{sm:'10',base:'30'}} justify={{sm:'space-between',base:'space-around'}} flexDir={{sm:'row',base:'column'}} display={{sm:'flex', base:menu?'flex':'none'}}>
                    {links.map((link,id)=>(
                        <Link key={id} color='white' onClick={()=>setMenu(false)} to={link.href} _hover={{borderBottom:'1px solid orange'}}>{link.label}</Link>
                    ))}
                </Flex>
            </SlideFade>
            <Flex align={{sm:'end',base:'center'}} w={{sm:'40%',base:'100%'}} bg={{sm:'transparent',base:'rgb(0,0,0)'}} pos={{sm:'initial',base:'fixed'}} h='100%' top='0' left='0' zIndex={{sm:'10',base:'30'}} justify={{sm:'space-between',base:'space-around'}} flexDir={{sm:'row',base:'column'}} display={{sm:'flex', base:'none'}}>
                    {links.map((link,id)=>(
                        <Link key={id} color='white' onClick={()=>setMenu(false)} to={link.href} _hover={{borderBottom:'1px solid orange'}}>{link.label}</Link>
                    ))}
            </Flex>
            <IconButton color='white' fontSize='24px' zIndex='50' icon={<RiMenu3Fill/>} onClick={handle} variant='ghost' display={{sm:'none',base:'flex'}}/>
        </Flex>
    </Box>
  )
}

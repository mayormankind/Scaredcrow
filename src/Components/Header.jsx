import { Box, Text, Flex, IconButton, Fade, useDisclosure, SlideFade, Image } from '@chakra-ui/react'
import React, { useState } from 'react';
import {RiCloseFill,RiMenu3Fill} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';

export default function Header({bg}) {
    const [ menu, setMenu ] = useState(false);
    const { isOpen, onToggle } = useDisclosure();
    const links=[
        {label:'Home',href:'/',},
        {label:'About me',href:'/about',},
        {label:'My skills',href:'/skills',},
        {label:'Portfolio',href:'/portfolio',},
        {label:'Contacts',href:'/#contact',},
    ]
    const handle = () =>{
        setMenu(!menu)
        onToggle()
    }
  return (
    <Box p='20px' w='100%' color='white' bg={bg?bg:'transparent'}>
        <Flex justify='space-between' align='center' w='100%' h='100%' mx='auto' maxW='1100px'>
            <Box flex='0.5'></Box>
            {/* <SlideFade in={isOpen}> */}
                <Flex w={'100%'} bg={'rgb(0,0,0)'} pos={'fixed'} h='100vh' top='0' left='0' bottom='0' right='0' zIndex={'50'} display={menu?'flex':'none'}>
                    <Flex  flexDir={'column'} textAlign='center' h='70%' justify='space-around' m='auto'>
                        {links.map((link,id)=>(
                            <Reveal key={id}>
                                <Link color='white' onClick={()=>setMenu(false)} to={link.href}><Text _hover={{borderBottom:'1px solid orange'}}>{link.label}</Text></Link>
                            </Reveal>
                        ))}
                    </Flex>
                </Flex>
            {/* </SlideFade> */}
            <Flex align={'end'} w='100%' bg={'transparent'} pos={'initial'} h='100%' top='0' left='0' zIndex={'10'} justify={'space-between'} display={{md:'flex', base:'none'}} flex='0.5'>
                    {links.map((link,id)=>(
                        <Reveal key={id}>
                            <Link color='white' onClick={()=>setMenu(false)} to={link.href}><Text _hover={{borderBottom:'1px solid orange'}}>{link.label}</Text></Link>
                        </Reveal>
                    ))}
            </Flex>
            <Reveal>
                <IconButton color='white' pos='sticky' top='0' fontSize='24px' zIndex='60' icon={<RiMenu3Fill/>} onClick={handle} variant='ghost' display={{md:'none',base:'flex'}}/>
            </Reveal>
        </Flex>
    </Box>
  )
}

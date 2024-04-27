import { Box, Text, Flex, IconButton, Fade, useDisclosure, SlideFade, Image } from '@chakra-ui/react'
import React, { useState } from 'react';
import {RiCloseFill,RiMenu3Fill} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';

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
            <Box flex='0.5'>
                <Reveal>
                    <Link to='/'>
                        <Image src={'images/logo.png'} w='100px'/>
                    </Link>
                </Reveal>
            </Box>
            <SlideFade in={isOpen} display={{md:'none',base:'flex'}}>
                <Flex align={{sm:'end',base:'center'}} w={{sm:'50%',base:'100%'}} bg={{sm:'transparent',base:'rgb(0,0,0)'}} pos={{sm:'initial',base:'fixed'}} h='100%' top='0' left='0' zIndex={{sm:'10',base:'30'}} justify={{sm:'space-between',base:'space-around'}} flexDir={{sm:'row',base:'column'}} display={{md:'flex', base:menu?'flex':'none'}}>
                    {links.map((link,id)=>(
                        <Reveal key={id}>
                            <Link color='white' onClick={()=>setMenu(false)} to={link.href} _hover={{borderBottom:'1px solid orange'}}>{link.label}</Link>
                        </Reveal>
                    ))}
                </Flex>
            </SlideFade>
            <Flex align={{sm:'end',base:'center'}} w='100%' bg={{sm:'transparent',base:'rgb(0,0,0)'}} pos={{sm:'initial',base:'fixed'}} h='100%' top='0' left='0' zIndex={{sm:'10',base:'30'}} justify={{sm:'space-between',base:'space-around'}} flexDir={{sm:'row',base:'column'}} display={{md:'flex', base:'none'}} flex='0.5'>
                    {links.map((link,id)=>(
                        <Reveal key={id}>
                            <Link color='white' onClick={()=>setMenu(false)} to={link.href} _hover={{borderBottom:'1px solid orange'}}>{link.label}</Link>
                        </Reveal>
                    ))}
            </Flex>
            <Reveal>
                <IconButton color='white' fontSize='24px' zIndex='50' icon={<RiMenu3Fill/>} onClick={handle} variant='ghost' display={{md:'none',base:'flex'}}/>
            </Reveal>
        </Flex>
    </Box>
  )
}

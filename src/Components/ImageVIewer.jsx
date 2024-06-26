import { CloseButton, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { Reveal } from './Reveal'

export default function ImageViewer(props) {
  return (
    <Flex pos='fixed' w='100%' h='100%' top='0' left='0' bg='rgba(0,0,0,0.6)' zIndex='20'>
        <CloseButton style={{fontSize:'25px', color:'red',position:'absolute',right:'40px',top:'40px',zIndex:'30'}} onClick={()=>props.setPreview(false)}/>
        <Flex w='100%' m='auto' maxW='1100px'>
          <Reveal>
            <Image src={props.image} w='100%' h='100%'/>
          </Reveal>
        </Flex>
      <BackdropEffect/>
    </Flex>
  )
}
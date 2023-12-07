import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import PageContainer from '../Components/PageContainer'
import Divider from '../Components/Divider'

export default function Services() {
    const services = [
        {id:0,title:'Logo design',detail:'we make top notch designs ranging from your brands to anything you can think of'},
        {id:1,title:'Branding',detail:'we make top notch designs ranging from your brands to anything you can think of'},
        {id:2,title:'Graphics design',detail:'we make top notch designs ranging from your brands to anything you can think of'},
        {id:3,title:'Training',detail:'we make top notch designs ranging from your brands to anything you can think of'},
    ]
  return (
    <PageContainer id='about'>
        <Flex flexDir='column' gap='20px' textAlign='center' w='100%' h='100%'>
            <Text fontWeight='bold' fontSize='20px'>Services we offer</Text>
            <Divider/>
            <Flex flexDir={{sm:'row',base:'column'}} gap='20px'>
                {services.map(service=>(
                    <Flex flexDir={'column'} gap='10px' height='100%' minH={'250px'} textAlign={'center'} p={'20px'} borderRadius={'10px'} border='2px solid orange'>
                        <Text as='h3' fontWeight={'bold'} color='orange'>{service.title}</Text>
                        <p>{service.detail}</p>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    </PageContainer>
  )
}


import { Box, Flex, Icon, Text, Grid } from '@chakra-ui/react'
import React from 'react'
import PageContainer from '../PageContainer'
import Divider from '../Divider'
import { Ri24HoursFill, RiAlbumFill, RiCarFill, RiCarWashingFill } from 'react-icons/ri'

export default function ServicesComponent() {
    const services = [
        {id:0,title:'Logo design',detail:'we make top notch designs ranging from your brands to anything you can think of',icon:<Ri24HoursFill/>},
        {id:1,title:'Branding',detail:'we make top notch designs ranging from your brands to anything you can think of',icon:<RiAlbumFill/>},
        {id:2,title:'Graphics design',detail:'we make top notch designs ranging from your brands to anything you can think of',icon:<RiCarFill/>},
        {id:3,title:'Training',detail:'we make top notch designs ranging from your brands to anything you can think of',icon:<RiCarWashingFill/>},
        {id:4,title:'Mockup Design',detail:'we make top notch designs ranging from your brands to anything you can think of',icon:<RiCarWashingFill/>},
        {id:5,title:'Book cover Design',detail:'we make top notch designs ranging from your brands to anything you can think of',icon:<RiCarWashingFill/>},
        {id:6,title:'Poetry writing',detail:'If making you feelings known is a problem, this is your stop. ',icon:<RiCarWashingFill/>},
        {id:7,title:'Celebration wishes',detail:'If making you feelings known is a problem, this is your stop. ',icon:<RiCarWashingFill/>},
    ]
  return (
    <PageContainer id='skills'>
        <Flex flexDir='column' gap='20px' textAlign='center' w='100%' h='100%'>
            <Text fontWeight='bold' fontSize='20px'>Services we offer</Text>
            <Divider/>
            <Grid gridTemplateColumns={'repeat(auto-fit, minmax(15rem, 1fr))'} w='100%' gap='20px'>
                {services.map(service=>(
                    <Flex flexDir={'column'} key={service.id} gap='10px' mx='auto' maxW='250px' w='100%' h='250px' textAlign={'center'} p={'20px'} borderRadius={'10px'} border='2px solid orange' justify='center' align='center' boxShadow={'lg'}>
                        <Text as='i' fontSize='30px'>{service.icon}</Text>                        
                        <Text as='h3' fontWeight={'bold'} color='orange'>{service.title}</Text>
                        <p>{service.detail}</p>
                    </Flex>
                ))}
            </Grid>
        </Flex>
    </PageContainer>
  )
}


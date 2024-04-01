import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import PageContainer from '../PageContainer'
import Divider from '../Divider'

export default function AboutComponent() {
  return (
    <PageContainer id='about'>
      <Grid gridTemplateColumns={'repeat(auto-fit, minmax(20rem, 1fr))'} justifyItems={'center'} w='100%' gap='30px'>
        <Flex flexDir='column' gap='20px' textAlign='center' w='100%' h='100%'>
            <Text fontWeight='bold' fontSize='20px'>About me</Text>
            <Divider/>
            <Heading color='orange' fontSize='lg'>Hello 🖐👋👋 stranger, I am Sam</Heading>
            <Text textAlign={{sm:'center',base:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis officiis vitae quas doloremque aut explicabo placeat obcaecati. Nam atque, vitae veniam sequi dicta eos laboriosam beatae, praesentium dolor porro iure voluptatem. Esse eaque laboriosam expedita laborum quibusdam necessitatibus sequi, dicta quod, repellat veritatis at! Dolore sunt laboriosam deleniti voluptatum perferendis explicabo veniam itaque, atque sapiente est fuga ex similique? Molestiae, eius. Cum quod, harum magnam libero aperiam quidem ipsa dolores.</Text>
        </Flex>
        <Image src='images/sam.jpg' loading='lazy' w={{sm:'80%',base:'100%'}} h='100%'/>
        </Grid>
    </PageContainer>
  )
}

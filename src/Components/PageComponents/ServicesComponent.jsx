import { Box, Flex, Icon, Text, Grid } from '@chakra-ui/react'
import React from 'react'
import PageContainer from '../PageContainer'
import Divider from '../Divider'
import { Ri24HoursFill, RiAlbumFill, RiCarFill, RiCarWashingFill } from 'react-icons/ri'
import { Reveal } from '../Reveal'

export default function ServicesComponent() {


    const services = [
        {id:0,title:'Logo design',detail:'Unleash the power of your brand with a captivating logo design that speaks volumes from sleek and modern to timeless and elegant art that embody your brand.',icon:<Ri24HoursFill/>},
        {id:1,title:'Branding',detail:"From defining your brand's voice and visual identity to creating cohesive brand collateral, elevate your brand to new heights with edified business strategies with your audience.",icon:<RiAlbumFill/>},
        {id:2,title:'Graphics design',detail:'Transform your ideas into visually stunning realities with expert graphic design services tailored to your needs. Whether you need eye-catching marketing materials, engaging social media graphics, or polished corporate presentations.',icon:<RiCarFill/>},
        {id:3,title:'Training',detail:'From mastering design software to honing your design principles, I provide hands-on training that equips you with the tools and techniques you need to succeed in the world of design.',icon:<RiCarWashingFill/>},
        {id:4,title:'Mockup Design',detail:"Bring your designs to life and showcase them in their best light with meticulously crafted mockup designs, whether you're presenting a new product concept or pitching a creative project.",icon:<RiCarWashingFill/>},
        {id:5,title:'Book cover Design',detail:"Authors, capture your readers' attention and convey the essence of your story with a captivating book cover design, from striking imagery to compelling typography.",icon:<RiCarWashingFill/>},
        {id:6,title:'Poetry writing',detail:"Imagine the beauty of your words with evocative poetry illustrated designs that bring your poetry to life. From elegant typography to captivating visuals, I specialize in creating designs that complement and enhance your poetic expression.",icon:<RiCarWashingFill/>},
        {id:7,title:'Celebration wishes',detail:"Mark special occasions with heartfelt celebration wishes that convey your sincerest sentiments depending on the occasions and make the recipient feel truly special.",icon:<RiCarWashingFill/>},
    ]
  return (
    <PageContainer id='skills'>
        <Flex flexDir='column' gap='20px' textAlign='center' w='100%' h='100%'>
            <Box mx={'auto'}>
                <Reveal>
                    <Text fontWeight='bold' fontSize='20px'>Services we offer</Text>
                </Reveal>
            </Box>
            <Divider/>
            <Grid gridTemplateColumns={'repeat(auto-fit, minmax(15rem, 1fr))'} w='100%' h='100%' gap='20px'>
                {services.map(service=>(
                    <Flex flexDir={'column'} key={service.id} gap='10px' mx='auto' maxW='270px' w='100%' h='100%' textAlign={'center'} p={'20px'} borderRadius={'10px'} border='2px solid orange' justify='center' align='center' boxShadow={'lg'}>
                        <Reveal>
                            <Text as='i' fontSize='30px'>{service.icon}</Text>                        
                        </Reveal>
                        <Reveal>
                            <Text as='h3' fontWeight={'bold'} color='orange'>{service.title}</Text>
                        </Reveal>
                        <Reveal>
                            <p>{service.detail}</p>
                        </Reveal>
                    </Flex>
                ))}
            </Grid>
        </Flex>
    </PageContainer>
  )
}


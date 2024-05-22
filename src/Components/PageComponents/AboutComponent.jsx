import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import PageContainer from '../PageContainer'
import Divider from '../Divider'
import { Reveal } from '../Reveal'

export default function AboutComponent() {
  return (
    <PageContainer id='about'>
      <Grid gridTemplateColumns={'repeat(auto-fit, minmax(20rem, 1fr))'} justifyItems={'center'} w='100%' gap='30px'>
        <Flex flexDir='column' gap='20px' textAlign='center' w='100%' h='100%'>
          <Box mx='auto'>
            <Reveal>
              <Text fontWeight='bold' fontSize='20px'>About me</Text>
            </Reveal>
          </Box>
          <Divider/>
          <Box mx='auto'>
            <Reveal>
              <Heading color='orange' fontSize='lg'>Hey there!🖐👋👋 meet Sam,</Heading>
            </Reveal>
          </Box>
          <Reveal>
            <Text textAlign={{sm:'center',base:'justify'}}>a graphic designer practically driven by a deep-seated sense for visual storytelling and a desire to craft memorable and impactful designs. With over 2 years of experience in the field, I've honed my skills in transforming ideas into compelling visuals that not only tell tales about ART but also resonate with audiences in respect to their taste and desire.</Text>
          </Reveal>
          <Reveal>
            <Text textAlign={{sm:'center',base:'justify'}}>Throughout my career, I've had the privilege of working on a wide array of design projects, ranging from logo design, captivating book cover design, poetry design and brand identity development to marketing collateral and digital media. Whether it's distilling a brand's essence into a memorable logo or creating an immersive visual experience for a marketing campaign, I approach each project with the same level of enthusiasm and dedication.</Text>
          </Reveal>
          <Reveal>
            <Text textAlign={{sm:'center',base:'justify'}}>My design philosophy is rooted in a belief that good design is not just about making things look pretty, but about solving problems and creating meaningful connections. I place a strong emphasis on understanding the client's objectives, target audience, and brand identity, allowing me to tailor my designs to meet their specific needs and goals. By combining creativity with strategic thinking, I strive to deliver designs that not only captivate visually but also drive results and make a lasting impact.</Text>
          </Reveal>
          <Reveal>
            <Text textAlign={{sm:'center',base:'justify'}}>In essence, I see myself not just as a graphic designer, but as a storyteller, problem solver, and creative collaborator. I'm deeply committed to helping clients bring their visions to life through thoughtful and impactful design, and I'm always eager to embark on new creative adventures and challenges. If you're looking for a passionate and dedicated partner to help you elevate your brand's visual identity and achieve your design goals, I'd love to connect and explore how we can make solve problems together.</Text>
          </Reveal>
        </Flex>
        <Reveal>
          <Image src='images/sam.jpg' loading='lazy' w={{sm:'80%',base:'100%'}} h='100%'/>
        </Reveal>
      </Grid>
    </PageContainer>
  )
}

import { Box, Flex, Grid, Text,Image } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import PageContainer from '../Components/PageContainer';
import Divider from '../Components/Divider';

export default function AllProjects() {
  const projectList = [
    {id:'1',projectName:`EIT's Website`,projectDetails:'The official website of Essential Interlink Technologies (an engineering/electronics company)',projectImage:'images/1.jpg',frameworks:['react','chakraUI','react-icons']},
    {id:'5',projectName:"My Portfolio",projectDetails:'My personal potfolio that consists of all projects i have worked on',projectImage:'images/2.jpg',frameworks:['react','chakraUI','react-icons']},
    {id:'6',projectName:"Pick n' Toe",projectDetails:'A TIC-TAC-TOE multiplayer that you could play game with your friends. Designed with javascript',projectImage:'images/2a.jpg',frameworks:['HTML','JavaScript','CSS/SCSS']},
    {id:'10',projectName:`Mongfrens`,projectDetails:'An anonymous messaging app with timer for self-destructible messages.',projectImage:'images/3a.jpg',frameworks:['react','chakraUI','react-icons']},
    {id:'11',projectName:`WordList`,projectDetails:'A character randomizer that gives all possible combinations of a set of characters given.',projectImage:'images/3.jpg',frameworks:['HTML','CSS','javascript']},
    {id:'9',projectName:`ProspectTailors`,projectDetails:'A webpage(portfolio template) designed for HoistMe',projectImage:'images/4.jpg', frameworks:['react','chakraUI','react-icons']},
    {id:'12',projectName:`Todo App`,projectDetails:'A simple To-do app for personal use.',projectImage:'images/15.jpg',frameworks:['HTML','CSS','typescript','javascript']},
];   
  return (
    <Flex flexDir='column' w='100%' h='100%'>
      <Header bg='black'/>
      <PageContainer>
        <Flex flexDir='column' gap='20px' textAlign='center' w='100%' h='100%'>
          <Text as='h1' fontWeight='bold' fontSize={{sm:'2xl',base:'xl'}}>My design jacket</Text>
          <Divider/>
          <Grid gridTemplateColumns={{sm:'repeat(3,1fr)',base:'repeat(1,1fr)'}} gap='10px' w='100%' h='100%'>
            {projectList.map(project=>(
              <Image w='100%' h='100%' loading={'lazy'} key={project.id} boxShadow='md' src={project.projectImage} borderRadius={'10px'} onClick={()=>preview(props.img)}/>
            ))}
          </Grid>
        </Flex>
      </PageContainer>
      <Footer/>
    </Flex>
  )
}

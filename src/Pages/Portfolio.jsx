import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import PageContainer from '../Components/PageContainer'
import Divider from '../Components/Divider';
import { Link } from 'react-router-dom';

export default function Portfolio() {
    const projectList = [
        {id:'1',projectName:`EIT's Website`,projectDetails:'The official website of Essential Interlink Technologies (an engineering/electronics company)',projectImage:'images/etn.PNG',pref:'https://eit-website.vercel.app',github:'https://github.com/mayormankind/etn_website',frameworks:['react','chakraUI','react-icons']},
        {id:'5',projectName:"My Portfolio",projectDetails:'My personal potfolio that consists of all projects i have worked on',projectImage:'images/portfolio.PNG',pref:'https://my-portfolio-delta-lac.vercel.app',github:'https://github.com/mayormankind/my_portfolio',frameworks:['react','chakraUI','react-icons']},
        {id:'6',projectName:"Pick n' Toe",projectDetails:'A TIC-TAC-TOE multiplayer that you could play game with your friends. Designed with javascript',projectImage:'images/pnt1.PNG',pref:'https://tic-tac-toe-mayormankind.vercel.app',github:'https://github.com/mayormankind/TicTacToe',frameworks:['HTML','JavaScript','CSS/SCSS']},
        // {id:'10',projectName:`Mongfrens`,projectDetails:'An anonymous messaging app with timer for self-destructible messages.',projectImage:'images/mongfrens.PNG',pref:'https://mongFrens.vercel.app',github:'https://github.com/mayormankind/Amongfriends',frameworks:['react','chakraUI','react-icons']},
        // {id:'11',projectName:`WordList`,projectDetails:'A character randomizer that gives all possible combinations of a set of characters given.',projectImage:'images/wordlist.PNG',pref:'https://wordlist-rust.vercel.app',github:'https://github.com/mayormankind/wordList',frameworks:['HTML','CSS','javascript']},
        // {id:'9',projectName:`ProspectTailors`,projectDetails:'A webpage(portfolio template) designed for HoistMe',projectImage:'images/prospectTailors.PNG',pref:'https://prospectTailors.vercel.app',github:'https://github.com/mayormankind/prospectTailors',frameworks:['react','chakraUI','react-icons']},
        // {id:'12',projectName:`Todo App`,projectDetails:'A simple To-do app for personal use.',projectImage:'images/todo.PNG',pref:'https://todo-with-ts-rho.vercel.app',github:'https://github.com/mayormankind/todoWithTs',frameworks:['HTML','CSS','typescript','javascript']},
    ];
  return (
    <PageContainer id='portfolio'>
        <Flex flexDir='column' gap='20px' textAlign='center' w='100%' h='100%'>
            <Text fontWeight='bold' fontSize='20px'>Portfolio</Text>
            <Divider/>
            <Grid gridTemplateColumns={{sm:'repeat(3,1fr)',base:'repeat(1,1fr)'}} gap='10px' w='100%' h='100%'>
                {projectList.map(project=>(
                    <Image w='100%' h='100%' key={project.id} boxShadow='md' src={project.projectImage} borderRadius={'10px'}/>
                ))}
            </Grid>
            <Link to='/projects'><Text _hover={{borderBottom:'2px solid orange',transition:'500ms'}} w='fit-content' mx={'auto'}>View all works</Text></Link> 
        </Flex>
    </PageContainer>
  )
}

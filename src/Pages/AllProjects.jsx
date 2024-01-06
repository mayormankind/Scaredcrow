import { Box, Flex, Grid, Text,Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import PageContainer from '../Components/PageContainer';
import Divider from '../Components/Divider';
import { getProjects } from '../api';
import { Link } from 'react-router-dom';

export default function AllProjects() {
  const [ projects, setProjects ] =  useState([]);
  const [ loading, setLoading ] =  useState(true);
    
    useEffect(()=>{
            const call = getProjects(setProjects);
       
    },[])
    console.log(projects);

  return (
    <Flex flexDir='column' w='100%' h='100%'>
      <Header bg='black'/>
      <PageContainer>
        <Flex flexDir='column' gap='20px' textAlign='center' w='100%' h='100%'>
          <Text as='h1' fontWeight='bold' fontSize={{sm:'2xl',base:'xl'}}>My design jacket</Text>
          <Divider/>
          <Grid gridTemplateColumns={{sm:'repeat(3,1fr)',base:'repeat(1,1fr)'}} gap='10px' w='100%' h='100%'>
            {/* {loading ? <Text textAlign='center' >Please wait, loading...</Text> : (projects.map(project=>( */}
            {projects && projects.map(project=>(
              <Link to={`/project/${project.pid}`} key={project.pid}>
                <Image w='100%' h='100%' loading={'lazy'} key={project.pid} boxShadow='md' src={project.images[0]} borderRadius={'10px'}/>
              </Link>
            ))}
          </Grid>
        </Flex>
      </PageContainer>
      <Footer/>
    </Flex>
  )
}

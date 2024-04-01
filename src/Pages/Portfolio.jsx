import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import PageContainer from '../Components/PageContainer'
import Divider from '../Components/Divider';
import { Link } from 'react-router-dom';
import ImageViewer from '../Components/ImageVIewer';
import { getProjects } from '../api';


export default function Portfolio() {
    const [ view, setPreview ] = useState(false);
    const [ image, setImage ] = useState('');
    const [ projects, setProjects ] =  useState([]);
    const [ loading, setLoading ] =  useState(true);
    
    
    useEffect(()=>{
        const call = getProjects(setProjects);
    },[])
      
    const preview = (img) =>{
        setPreview(true);
        setImage(img);
    }
  return (
    <PageContainer id='portfolio'>
        <Flex flexDir='column' gap='20px' textAlign='center' w='100%' h='100%'>
            <Text fontWeight='bold' fontSize='20px'>Portfolio</Text>
            <Divider/>
            <Grid gridTemplateColumns={'repeat(auto-fit, minmax(5rem, 1fr))'} w='100%' gap='20px'>
                {/* {loading ? <Text textAlign='center'>Please wait, loading...</Text> : (projects.map(project=>( */}
                {projects && projects.map(project=>(
                    <Link to={`/project/${project.pid}`} key={project.pid}>
                        <Flex h='100%' w='100%' flexDir='column'>
                            <Image w='100%' h='100%' transition='1s' loading={'lazy'} key={project.pid} boxShadow='md' src={project.images[0]} borderRadius={'10px'}/>
                            <Text>{project.title}</Text>
                        </Flex>
                    </Link>
                ))}
            </Grid>
            <Link to='/portfolio'><Text _hover={{borderBottom:'2px solid orange',transition:'500ms'}} w='fit-content' mx={'auto'}>View all works</Text></Link> 
        </Flex>
        {view && <ImageViewer image={image} setPreview={setPreview}/>}
    </PageContainer>
  )
}

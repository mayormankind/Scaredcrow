import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import PageContainer from '../Components/PageContainer'
import Divider from '../Components/Divider';
import { Link } from 'react-router-dom';
import ImageViewer from '../Components/ImageVIewer';

export default function Portfolio() {
    const [ view, setPreview ] = useState(false);
    const [ image, setImage ] = useState('');
    const projectList = [
        {id:'1',projectName:`EIT's Website`,projectDetails:'The official website of Essential Interlink Technologies (an engineering/electronics company)',projectImage:'images/7.jpg',frameworks:['react','chakraUI','react-icons']},
        {id:'5',projectName:"My Portfolio",projectDetails:'My personal potfolio that consists of all projects i have worked on',projectImage:'images/5.jpg',frameworks:['react','chakraUI','react-icons']},
        {id:'6',projectName:"Pick n' Toe",projectDetails:'A TIC-TAC-TOE multiplayer that you could play game with your friends. Designed with javascript',projectImage:'images/12.jpg',frameworks:['HTML','JavaScript','CSS/SCSS']}
    ];
    const preview = (img) =>{
        setPreview(true);
        setImage(img);
    }
  return (
    <PageContainer id='portfolio'>
        <Flex flexDir='column' gap='20px' textAlign='center' w='100%' h='100%'>
            <Text fontWeight='bold' fontSize='20px'>Portfolio</Text>
            <Divider/>
            <Grid gridTemplateColumns={{sm:'repeat(3,1fr)',base:'repeat(1,1fr)'}} gap='10px' w='100%' h='100%'>
                {projectList.map(project=>(
                    <Link to='/project'>
                        <Flex h='100%' w='100%' pos='relative' overflow='hidden' _after={{content:'""',display:'block',transition:'0.5s',pos:'absolute',h:'200px',w:'200px',bg:'orange.400',bottom:'90%',right:'90%',borderRadius:'50%',filter:'blur(5px)',zIndex:'-1'}} _hover={{_after:{bottom:'0',left:'0',transition:'1s',h:'100%',w:'100%',borderRadius:'none'}}}>
                            <Image w='100%' h='100%' transition='1s' loading={'lazy'} key={project.id} boxShadow='md' src={project.projectImage} borderRadius={'10px'}/>
                        </Flex>
                        {/* <Image w='100%' h='100%' loading={'lazy'} key={project.id} boxShadow='md' src={project.projectImage} borderRadius={'10px'} onClick={()=>preview(props.img)}/> */}
                    </Link>
                ))}
            </Grid>
            <Link to='/portfolio'><Text _hover={{borderBottom:'2px solid orange',transition:'500ms'}} w='fit-content' mx={'auto'}>View all works</Text></Link> 
        </Flex>
        {view && <ImageViewer image={image} setPreview={setPreview}/>}
    </PageContainer>
  )
}

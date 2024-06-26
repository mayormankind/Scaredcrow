import { Box, Image, Flex, Text, Grid, Divider } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Contact from './Contact'
import Header from '../Components/Header'
import PageContainer from '../Components/PageContainer'
import Footer from '../Components/Footer'
import { FaFigma, FaPinterest, FaChrome } from 'react-icons/fa';
import { SiAdobeillustrator, SiAdobephotoshop, SiCanva } from 'react-icons/si';
import { collection, onSnapshot } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../api/firebase';
import { Reveal } from '../Components/Reveal'

export default function DesignDetail() {
  const [ details, setDetails ] =  useState();
  const {id} = useParams();
  const userRef = collection(db,'scaredcrow-design');
  const [currImage, setCurrent ] = useState('');

  useEffect(()=>{
      onSnapshot(userRef, (res)=>{
        const individualDesign = res.docs.map(doc=>{
          return { ...doc.data()}
        }).filter(item=>{
            return item.pid == id
        })[0]
        setDetails(individualDesign);
        setCurrent(details?.images[0]);
      });
    },[id])

  const iconCheck = (icon) =>{
    if(icon == 'SiAdobeillustrator') return <SiAdobeillustrator/>
    else if(icon == 'SiAdobephotoshop') return <SiAdobephotoshop/>
    else if(icon == 'SiCanva') return <SiCanva/>
    else if(icon == 'FaFigma') return <FaFigma/>
    else if(icon == 'FaPinterest') return <FaPinterest/>
    else if(icon == 'FaChrome') return <FaChrome/>
  }

  return (
      <Flex w='100%' h='100%' flexDir='column' pos='relative'>
        <Header bg='black'/>
          <PageContainer>
            <Flex flexDir='column' gap='20px'>
              <Box mx='auto'>
                <Reveal>
                  <Text as='h3' fontWeight='bold' fontSize={{sm:'2xl',base:'xl'}} textAlign='center'>{details?.title}</Text>
                </Reveal>
              </Box>
              <Flex mx='auto' w={{sm:'70%',base:'100%'}} h='100%'>
                <Reveal>
                  <Image src={currImage} loading='lazy' w='100%' h='100%' objectFit={'cover'}/>
                </Reveal>
              </Flex>
              <Grid gridTemplateColumns={'repeat(auto-fit, minmax(5rem, 1fr))'} w='100%' gap='20px'>
                {details?.images.map((image,id)=>(
                  <Reveal key={id}>
                    <Image src={image} loading='lazy' w='100%' h='100%' onClick={()=>setCurrent(image)}/>
                  </Reveal>
                ))}
                </Grid>
                <Text as='h3' fontWeight='bold' fontSize={{sm:'2xl',base:'xl'}}>Tools used:</Text>
                <Flex gap='15px' flexWrap='wrap'>
                  {details?.tools.map(tool=>(
                    <Flex flexDir='column' key={tool.pid}>
                      <Reveal>
                        <Text as='i' fontSize={{sm:'24px',base:'20px'}} textAlign='center' color={tool.color}>{iconCheck(tool.icon)}</Text>
                      </Reveal>
                      <Reveal>
                        <Text fontSize={{sm:'15px',base:'13px'}} textTransform={'capitalize'}>{tool.value}</Text>
                      </Reveal>
                    </Flex>
                  ))}
                </Flex>
                <Divider/>
                <Flex flexDir='column'>
                  <Reveal>
                    <Text as='h3' fontWeight='bold' fontSize={{sm:'2xl',base:'xl'}}>About the design:</Text>
                  </Reveal>
                  <Reveal><Text as='p'>{details?.overview}</Text></Reveal>
                </Flex>
            </Flex>
          </PageContainer>
        <Footer/>
    </Flex>
  )
}

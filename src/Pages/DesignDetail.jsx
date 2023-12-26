import { Image, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Contact from './Contact'
import Header from '../Components/Header'
import PageContainer from '../Components/PageContainer'
import Footer from '../Components/Footer'
import { FaFigma, FaPaintBrush, FaPinterest } from 'react-icons/fa';
import { RiChromeFill } from 'react-icons/ri'

export default function DesignDetail() {
  const tools = [
    {id:0,label:'Photoshop',icon:<FaFigma/>,color:'blue.500'},
    {id:0,label:'Illustrator',icon:<FaPaintBrush/>,color:'orange.500'},
    {id:0,label:'CorelDraw',icon:<RiChromeFill/>,color:'green.500'},
    {id:0,label:'Pinterest',icon:<FaPinterest/>,color:'red.500'},
    {id:0,label:'Figma',icon:<FaFigma/>,color:'blue.500'},
  ];
  return (
    <Flex w='100%' h='100%' flexDir='column'>
        <Header bg='black'/>
        <PageContainer>
          <Flex flexDir='column' gap='20px'>
              <Text as='h3' fontWeight='bold' fontSize={{sm:'2xl',base:'xl'}} textAlign='center'>Project Gamma</Text>
              <Flex>
                <Image src='images/pnt1.PNG' loading='lazy' w='100%' h='100%'/>
              </Flex>
              <Text as='h3' fontWeight='bold' fontSize={{sm:'2xl',base:'xl'}}>Tools used:</Text>
              <Flex gap='20px'>
                {tools.map(tool=>(
                  <Flex flexDir='column' key={tool.id}>
                    <Text as='i' fontSize='24px' textAlign='center' color={tool.color}>{tool.icon}</Text>
                    <Text>{tool.label}</Text>
                  </Flex>
                ))}
              </Flex>
              <Flex>
                <Text as='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sint quibusdam praesentium consectetur quo fugit animi necessitatibus nemo sed officiis quod provident ipsam maxime expedita eligendi tempore voluptate corporis excepturi, nam vel reprehenderit accusantium itaque odio. Dicta aperiam eveniet temporibus asperiores repellat quas maxime adipisci itaque alias expedita obcaecati rem iure debitis quisquam unde, eum ratione quo laborum quae repellendus natus ab voluptatum consequatur! Maxime atque iusto excepturi aspernatur. Impedit voluptatem ipsum nostrum hic quae tenetur, sit, quos doloribus blanditiis ut expedita autem sed molestias pariatur voluptatibus maxime labore minima maiores id voluptas. Temporibus aspernatur esse commodi perferendis veniam minima!</Text>
              </Flex>
          </Flex>
        </PageContainer>
        {/* <Contact/> */}
        <Footer/>
    </Flex>
  )
}

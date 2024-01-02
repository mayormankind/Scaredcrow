import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import PageContainer from '../Components/PageContainer'
import Divider from '../Components/Divider'
import AboutComponent from '../Components/PageComponents/AboutComponent'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function About() {
  return (
    <Flex w='100%' h='100%' flexDir='column' pos='relative'>
      <Header bg='black'/>
      <AboutComponent/>
      <Footer/>
    </Flex>
  )
}

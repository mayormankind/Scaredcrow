import { Flex } from '@chakra-ui/react'
import React from 'react'
import Header from '../Components/Header'
import ServicesComponent from '../Components/PageComponents/ServicesComponent'
import Footer from '../Components/Footer'

export default function Services() {
  return (
    <Flex w='100%' h='100%' flexDir='column' pos='relative'>
        <Header bg='black'/>
        <ServicesComponent/>
        <Footer/>
    </Flex>
  )
}


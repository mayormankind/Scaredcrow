import { Flex } from '@chakra-ui/react'
import React from 'react'

export default function PageContainer({children,id}) {
  return (
    <Flex bg='white' p={{sm:'70px',base:'60px 20px'}} w='100%' h='100%' id={id}>
        <Flex w='100%' h='100%' maxW='1000px' m='auto'>{children}</Flex>
    </Flex>
  )
}

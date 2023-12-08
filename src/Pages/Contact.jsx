import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import PageContainer from '../Components/PageContainer'
import { RiFacebookFill, RiInstagramFill, RiInstagramLine, RiMailLine, RiPhoneLine } from 'react-icons/ri'
import { FaTiktok } from 'react-icons/fa'
import Divider from '../Components/Divider'

export default function Contact() {
    const contacts = [
        {id:0,label:'E-mail',icon:<RiMailLine/>,detail:'samueladetoye@gmail.com',href:'mailto:samueladetoye@gmail.com'},
        {id:1,label:'Telephone number',icon:<RiPhoneLine/>,detail:'+234-7084857214',href:'tel:07084857214'},
        {id:3,label:'Instagram',icon:<RiInstagramFill/>,detail:'@scaredcrow',href:'https://www.instagram.com/scaredcrow'},
        {id:4,label:'Facebook Page',icon:<RiFacebookFill/>,detail:'@scaredcrow',href:'https://www.facebook.com/scaredcrow'},
        {id:4,label:'TikTok',icon:<FaTiktok/>,detail:'@scaredcrow',href:'https://www.tiktok.com/scaredcrow'},
    ]
  return (
    <PageContainer id='contact'>
        <Flex flexDir='column' gap='20px' w='100%' h='100%' textAlign='center'>
            <Text fontWeight='bold' fontSize='20px'>Contacts</Text>
            <Divider/>
            <Flex justify='space-between' flexDir={{sm:'row',base:'column'}} align='center' w='100%' h='100%' gap='10px'>
                {contacts.map(contact=>(
                    <Box w='100%' h='100%' bg='lightgray' p='10px' borderRadius='lg' key={contact.id} cursor='pointer' _hover={{transform:'translateY(-10px)'}} as='a' href={contact.href}>
                        <Flex align='center' justify='center' gap='5px' w='100%' h='100%' textAlign='center'>
                            <Icon color='orange' fontSize='24px'>{contact.icon}</Icon>
                            <Text ml='5px' fontWeight='semibold' fontSize='15px'>{contact.label}</Text>
                        </Flex>
                        <Text fontSize='15px'>{contact.detail}</Text>
                    </Box>
                ))}
            </Flex>
        </Flex>
    </PageContainer>
  )
}

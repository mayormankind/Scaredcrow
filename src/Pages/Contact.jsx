import { Box, Flex, Grid, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import PageContainer from '../Components/PageContainer'
import { RiFacebookFill, RiInstagramFill, RiInstagramLine, RiMailLine, RiPhoneLine } from 'react-icons/ri'
import { FaTiktok } from 'react-icons/fa'
import Divider from '../Components/Divider'
import { Reveal } from '../Components/Reveal'

export default function Contact() {

    const contacts = [
        {id:0,label:'E-mail',icon:<RiMailLine/>,detail:'sammyadetoye@gmail.com',href:'mailto:sammyadetoye@gmail.com'},
        {id:1,label:'Telephone number',icon:<RiPhoneLine/>,detail:'+234-8084857214',href:'tel:08084857214'},
        {id:3,label:'Instagram',icon:<RiInstagramFill/>,detail:'@lyrical_scroll_',href:'https://www.instagram.com/lyrical_scroll_?igsh=MXNkdWRhenJhcWsydA=='},
        {id:4,label:'Faceook Page',icon:<RiFacebookFill/>,detail:'@Allon Sam',href:'https://www.facebook.com/profile.php?id=100095231984599'},
    ]
  return (
    <PageContainer id='contact'>
        <Flex flexDir='column' gap='20px' w='100%' h='100%' textAlign='center'>
            <Box mx='auto'>
                <Reveal>
                    <Text fontWeight='bold' fontSize='20px'>Contacts</Text>
                </Reveal>
            </Box>
            <Divider/>
            <Grid gridTemplateColumns={'repeat(auto-fit, minmax(15rem, 1fr))'} w='100%' gap='20px'>
                {contacts.map(contact=>(
                    <Flex flexDir='column' w='100%' h='100%' bg='white' p='10px' borderRadius='lg' border={'2px solid orange'} key={contact.id} cursor='pointer' _hover={{transform:'translateY(-10px)'}} as='a' href={contact.href}>
                        <Flex align='center' justify='center' gap='5px' w='100%' textAlign='center'>
                            <Reveal>
                                <Icon color='orange' fontSize='24px'>{contact.icon}</Icon>
                            </Reveal>
                            <Reveal>
                                <Text ml='5px' fontWeight='semibold' fontSize='15px'>{contact.label}</Text>
                            </Reveal>
                        </Flex>
                        <Box mx='auto'><Reveal><Text fontSize='15px'>{contact.detail}</Text></Reveal></Box>
                    </Flex>
                ))}
            </Grid>
        </Flex>
    </PageContainer>
  )
}

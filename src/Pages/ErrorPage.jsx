import {Box,Link, Flex,Text, Heading, VStack} from "@chakra-ui/react";

export default function ErrorPage() {
  return (
    <Box>
        <Flex align={"center"} textAlign={"center"} w='100%' height= '100vh' justify={"center"}>
            <VStack>
             <Text>oops! page not found</Text>
            <Heading size={"4xl"} as="h1">404 page</Heading>
            <Text>Sorry, but the page you requested was not found!</Text>
            <></>
            <Link href="/">Go back to home page</Link>
            </VStack>
        </Flex>
    </Box>
  )
}

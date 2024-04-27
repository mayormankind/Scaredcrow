import { Box, Link, Flex, Text, Heading, VStack} from "@chakra-ui/react";

export default function ErrorPage() {
  return (
    <Box>
        <Flex align={"center"} textAlign={"center"} w='100%' flexDir='column' gap='20px' color='gray' height= '100vh' justify={"center"}>
          <Text>oops! page not found</Text>
          <Heading size={"4xl"} as="h1" color='orange'>404 page</Heading>
          <Text>Sorry, but the page you requested was not found!</Text>
          <Link href="/" color='orange.300' _hover={{color:'orange', borderBottom:'2px solid orange'}}>Go back to home page</Link>
        </Flex>
    </Box>
  )
}

import { Button, Container,chakra, Flex, Image, Spacer, Box } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
    return (
        <Box position='fixed' width='100%' boxShadow='md' zIndex={1} bg='brand.900' top={0}>
            <Container maxW="1200px"  >
        <chakra.header id="header">
          <Flex w="100%" py="1" align="center" justify="space-between">
            <Link href="/">
              <Image src="/logo.png" height={55} width={100} alt="TF logo" />
            </Link>
            <Spacer />

            <Flex align={"center"}>
              <Link href="">
                <Button bg="brand.100" color="brand.400" _hover="brand.500">
                  Contact Us
                </Button>
              </Link>
              <Link href="/help">&#x2753;</Link>
            </Flex>
          </Flex>
        </chakra.header>
      </Container>
        </Box>
      
    );
}

export default Navbar;
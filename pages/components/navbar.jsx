import {
  Button,
  Container,
  chakra,
  Flex,
  Image,
  Spacer,
  Box,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {

  const [isLargerThan730] = useMediaQuery("(min-width: 730px)"); 

  return (
    <Box
   
      width="100%"
      boxShadow="md"
      zIndex={1}
      bg="brand.900"
    >
      <Container maxW={900} padding="0.5rem">
        <chakra.header id="header">
          <Stack
            direction={isLargerThan730? "row": "column" }
            spacing="24px"
            align="center"
            justify="space-between"
          >
            {/* <Flex w="100%" py="1"  "> */}
            <Link href="/">
              <Image src="/logo.png" height={100} width={200} minW='150px' alt="TF logo" />
            </Link>

            <Stack
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Flex
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                bg="brand.800"
                color={"brand.900"}
                w={320}
                padding={"1rem"}
              >
                <Text>
                  <a href="mailto:chenwieugene.j@gmail.com">
                    chenwieugene.j@gmail.com
                  </a>
                </Text>

                <Text fontWeight={600}>
                  <a href="tel:+237670502777">+237670502777</a> /{" "}
                  <a href="tel:+237651395832">+237651395832</a>
                </Text>

                <Text>
                  <a href="https://wa.me/+237670502777" target="_blank">
                    Whatsapp
                  </a>
                </Text>
              </Flex>

              <Flex align={"center"}>
                <Link href="">
                  <Button
                    mr={"1rem"}
                    padding={0}
                    bg="brand.100"
                    color="brand.400"
                    _hover="brand.500"
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link href="">
                  <Button
                    mr={"1rem"}
                    padding={0}
                    bg="brand.100"
                    color="brand.400"
                    _hover="brand.500"
                  >
                    About
                  </Button>
                </Link>
                <Link href="">
                  <Button
                    mr={"1rem"}
                    padding={0}
                    bg="brand.100"
                    color="brand.400"
                    _hover="brand.500"
                  >
                    Cart
                  </Button>
                </Link>
                
                <Link href="/help">&#x2753;</Link>
              </Flex>
            </Stack>
          </Stack>
        </chakra.header>
      </Container>
    </Box>
  );
};

export default Navbar;

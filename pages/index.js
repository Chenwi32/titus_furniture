import { Box, Button, Container, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Head from "next/head";

import EmblaCarousel from "./components/emblaCarousel";
import Feedback from "./components/feedback";
import Scope from "./components/scope";
import Shopmenu from "./components/shopmenu";

export default function Home() {

  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");

  return (
    <>
      {
        <Head>
          <title>Titus' Furniture</title>
          <meta name="description" content="Titus' wood works and  Furniture store" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      }

      <Container padding={0} margin={"auto"} maxW={1200}>
        <Flex
          direction={isLargerThan900 ? "row" : "column"}
          fontSize={isLargerThan400 ? "1rem" : "0.8rem"}
        >
          <Flex
            padding={isLargerThan400 ? 10 : 5}
            pt={isLargerThan900 ? 28 : 10}
            flexDirection={"column"}
            w='100%'
          >
            <Heading mb={10} fontSize={isLargerThan400 ? "3rem" : "1.5rem"}>
              Make Your Own Custom Design.
            </Heading>

            <Text mb={10}>
              Bring whatever design you have come up with and let us handle the
              rest for your!!
            </Text>
            <Button
              bg={"brand.800"}
              color={"brand.900"}
              padding={isLargerThan400 ? "2rem" : '1.7rem 1.5rem'}
              fontSize={isLargerThan400 ? "1rem" : "0.9rem"}
              w={"fit-content"}
              borderRadius={"30px"}
              boxShadow={"lg"}
              _hover={{ backgroundColor: "#4fa883" }}
            >
              <a
                    href="https://wa.me/+237670502777"
                    target="_blank"
                    rel="noreferrer"
              >
                Talk To A Technician
                  </a>
              
            </Button>
          </Flex>
          <Box w={"100%"}>
            <EmblaCarousel />
          </Box>
        </Flex>

        <Shopmenu />

        <Scope />
        
        <Feedback/>

      </Container>
    </>
  );
}

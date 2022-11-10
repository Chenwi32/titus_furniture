import { Container, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";


const About = () => {
  return (
    <>
      {
        <Head>
          <title>About Us</title>
          <meta name="description" content="Titus' Furniture About page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      }
      <Container mt={10} minH={"80vh"} maxW={900}>
        <Heading mb={10}>About Titus' Furnture</Heading>
        <Text>
          Titus Furniture is a wood work company that takes care of any wood
          works related to house, from roofing to furniture, office accessories
          etc. <br />
          We have ready made designs, and we also do customized works, which we
          take whatever design you come up with, and make it come to life.{" "}
          <br />
          We also do after sell services such as; installation, maintainace, and
          repairs.
        </Text>

        <Heading mb={10} mt={10}>
          Watch a technichian at work
        </Heading>

      </Container>
    </>
  );
};

export default About;

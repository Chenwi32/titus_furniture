import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

const BedRoom = () => {
  const [isLargerThan950] = useMediaQuery("(min-width: 950px)");
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const imagescontainer = {
    bed1: [
      { url: "https://i.ibb.co/SxxFx2R/bed3.png" },
      { url: "https://i.ibb.co/0X6W9NJ/bed1.png" },
      { url: "https://i.ibb.co/DfqRQGL/bed2.png" },
      { url: "https://i.ibb.co/djg0L5c/bed4.jpg" },
      { url: "https://i.ibb.co/0YMTFYM/bed9.png" },
      { url: "https://i.ibb.co/bF2Pb8V/bed10.png" },
      { url: "https://i.ibb.co/PYCYbsL/bed12.png" },
      { url: "https://i.ibb.co/hRsv76k/bed17.png" },
      { url: "https://i.ibb.co/vhWJLDr/bed6.jpg" },
      { url: "https://i.ibb.co/vLMzHG2/bed7.png" },
      { url: "https://i.ibb.co/5YYCHg0/bed14.jpg" },
      { url: "https://i.ibb.co/6ZQPJ82/bed5.jpg" },
      { url: "https://i.ibb.co/chh356Z/bed8.png" },
      { url: "https://i.ibb.co/18ZDLJ0/bed16.png" },
      { url: "https://i.ibb.co/r4f3fcS/bed15.jpg" },
      { url: "https://i.ibb.co/Js1HJcF/bed13.jpg" },
      { url: "https://i.ibb.co/18ZDLJ0/bed16.png" },
      { url: "https://i.ibb.co/r4f3fcS/bed15.jpg" },
    ],
  };

  const [imageNum, setimageNum] = useState(0);

  return (
    <>
      {
        <Head>
          <title>Bedroom Accessories</title>
          <meta
            name="description"
            content="Titus' Furniture Bedroom accessories page"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      }

      <Container maxW={1200} mt={10} mb={10}>
        <Heading mb={10} textAlign={"center"}>
          Take a look at our bed room accessories
        </Heading>
        <SimpleGrid
          columns={
            isLargerThan950 ? 4 : isLargerThan700 ? 3 : isLargerThan400 ? 2 : 1
          }
          spacing={isLargerThan400 ? "24px" : "2rem"}
          margin={"auto"}
        >
          <Box
            w={isLargerThan400 ? 250 : "90%"}
            m="auto"
            height={300}
            border={" 2px solid #6D9886 "}
            overflow="hidden"
          >
            <Flex direction={"column"}>
              <Image
                src="/images/bed1.png"
                h={"230px"}
                transition={"0.5s"}
                _hover={{ transform: "scale(1.1)" }}
                onClick={onOpen}
              />

              <Text mt={2} textAlign={"center"} fontWeight={"600"}>
                Bed One
              </Text>
            </Flex>
          </Box>

          <Box
            w={isLargerThan400 ? 250 : "90%"}
            m="auto"
            height={300}
            border={" 2px solid #6D9886 "}
            overflow="hidden"
          >
            <Flex direction={"column"}>
              <Image
                src="/images/bed2.png"
                h={"230px"}
                transition={"0.5s"}
                _hover={{ transform: "scale(1.1)" }}
              />

              <Text mt={2} textAlign={"center"} fontWeight={"600"}>
                Bed Two
              </Text>
            </Flex>
          </Box>

          <Box
            w={isLargerThan400 ? 250 : "90%"}
            m="auto"
            height={300}
            border={" 2px solid #6D9886 "}
            transition={"0.5s"}
            overflow="hidden"
          >
            <Flex direction={"column"}>
              <Image
                src="/images/bed3.png"
                h={"230px"}
                transition={"0.5s"}
                _hover={{ transform: "scale(1.1)" }}
              />

              <Text mt={2} textAlign={"center"} fontWeight={"600"}>
                Bed Three
              </Text>
            </Flex>
          </Box>
        </SimpleGrid>

        {/* Image Viewer */}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            maxWidth={"unset"}
            width={"50rem"}
            height={"fit-content"}
          >
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody position={"relative"}>
              <Flex>
                <Image
                  src={imagescontainer.bed1[imageNum].url}
                  alt="bed"
                  width={"100%"}
                  height={"60vh"}
                />
              </Flex>
              <Button
                position={"absolute"}
                top={"45%"}
                onClick={() => {
                  if (imageNum <= 0) {
                    return;
                  } else {
                    setimageNum(imageNum - 1);
                  }
                }}
              >
                &#60;
              </Button>
              <Button
                position={"absolute"}
                top={"45%"}
                right="1.5rem"
                onClick={() => {
                  if (imageNum + 1 >= imagescontainer.bed1.length) {
                    return;
                  } else {
                    setimageNum(imageNum + 1);
                  }
                }}
              >
                &#62;
              </Button>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
};

export default BedRoom;

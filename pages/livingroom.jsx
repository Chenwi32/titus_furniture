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


const Livingroom = () => {
  
const [isLargerThan950] = useMediaQuery("(min-width: 950px)");
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const imagescontainer = {
    imageurl: [
      {
        id: 0,
        url: "https://i.ibb.co/VSjJnbP/livingroom2.png",
      },

      {
        id: 1,
        url: "https://i.ibb.co/mhjWLTc/livingroom4.jpg",
      },

      {
        id: 2,
        url: "https://i.ibb.co/kXLB4XB/livingroom1.png",
      },

      {
        id: 3,
        url: "https://i.ibb.co/sjPG8Hm/livingroom3.png",
      },

      {
        id: 4,
        url: "https://i.ibb.co/L01sDDp/livingroom16.png",
      },

      {
        id: 5,
        url: "https://i.ibb.co/tc4gZch/livingroom11.png",
      },

      {
        id: 6,
        url: "https://i.ibb.co/JmRMRH2/livingroom13.png",
      },

      {
        id: 7,
        url: "https://i.ibb.co/w07nMpv/livingroom10.png",
      },

      {
        id: 8,
        url: "https://i.ibb.co/wprF6kv/livingroom9.jpg",
      },

      {
        id: 9,
        url: "https://i.ibb.co/2trNYRM/livingroom6.png",
      },

      {
        id: 10,
        url: "https://i.ibb.co/YRgyknb/livingroom15.png",
      },

      {
        id: 11,
        url: "https://i.ibb.co/8XwP5XJ/livingroom14.png",
      },
    ],
  };

  const [imageNum, setimageNum] = useState(0);

  return (
    <>
      {
        <Head>
          <title>Living Room</title>
          <meta
            name="description"
            content="Titus' Furniture Living room accessories page"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      }

      <Container maxW={1200} mt={10} mb={10}>
        <Heading mb={10} textAlign={"center"}>
          Make Your Living room a leisure place with any of these sets.
        </Heading>
        <SimpleGrid
          columns={
            isLargerThan950 ? 4 : isLargerThan700 ? 3 : isLargerThan400 ? 2 : 1
          }
          spacing={isLargerThan400 ? "24px" : "2rem"}
          margin={"auto"}
        >
          {imagescontainer.imageurl.map((image) => 
              <Box
                w={isLargerThan400 ? 250 : "90%"}
                m="auto"
                height={300}
                border={" 2px solid #6D9886 "}
                overflow="hidden"
              >
                <Image
                  src={image.url}
                  h={"100%"}
                  transition={"0.5s"}
                  _hover={{ transform: "scale(1.01)" }}
                  onClick={() => {
                    setimageNum(image.id);
                    onOpen();
                  }}
                />
              </Box>)}

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
                  src={imagescontainer.imageurl[imageNum].url}
                  alt="bed"
                  width={"90%"}
                  height={"60vh"}
                  margin="auto"
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
                  if (imageNum + 1 >= imagescontainer.imageurl.length) {
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

              <Button
                mr={3}
                color="brand.900"
                bg="brand.800"
                _hover={{ backgroundColor: "#4fa883" }}
              >
                <a
                  href="https://wa.me/+237670502777"
                  target="_blank"
                  rel="noreferrer"
                  _hover={"text-decoration: none"}
                >
                  Get In Touch
                </a>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
  
};

export default Livingroom;

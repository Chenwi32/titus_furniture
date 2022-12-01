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
import Breadcrm from "./components/breadcrumb";

const BedRoom = () => {


const [isLargerThan950] = useMediaQuery("(min-width: 950px)");
const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
const [isLargerThan400] = useMediaQuery("(min-width: 400px)");

const { isOpen, onOpen, onClose } = useDisclosure();

const imagescontainer = {
  imageurl: [
    {
      id: 0,
      url: "https://i.ibb.co/SxxFx2R/bed3.png",
    },

    {
      id: 1,
      url: "https://i.ibb.co/0X6W9NJ/bed1.png",
    },

    {
      id: 2,
      url: "https://i.ibb.co/DfqRQGL/bed2.png",
    },

    {
      id: 3,
      url: "https://i.ibb.co/djg0L5c/bed4.jpg",
    },

    {
      id: 4,
      url: "https://i.ibb.co/0YMTFYM/bed9.png",
    },

    {
      id: 5,
      url: "https://i.ibb.co/bF2Pb8V/bed10.png",
    },

    {
      id: 6,
      url: "https://i.ibb.co/PYCYbsL/bed12.png",
    },

    {
      id: 7,
      url: "https://i.ibb.co/hRsv76k/bed17.png",
    },

    {
      id: 8,
      url: "https://i.ibb.co/vhWJLDr/bed6.jpg",
    },

    {
      id: 9,
      url: "https://i.ibb.co/vLMzHG2/bed7.png",
    },

    {
      id: 10,
      url: "https://i.ibb.co/5YYCHg0/bed14.jpg",
    },

    {
      id: 11,
      url: "https://i.ibb.co/6ZQPJ82/bed5.jpg",
    },

    {
      id: 12,
      url: "https://i.ibb.co/chh356Z/bed8.png",
    },

    {
      id: 13,
      url: "https://i.ibb.co/18ZDLJ0/bed16.png",
    },

    {
      id: 14,
      url: "https://i.ibb.co/r4f3fcS/bed15.jpg",
    },

    {
      id: 15,
      url: "https://i.ibb.co/Js1HJcF/bed13.jpg",
    },

    {
      id: 16,
      url: "https://i.ibb.co/1qSwtx0/bed20.jpg",
    },

    {
      id: 17,
      url: "https://i.ibb.co/GxnRn2M/bed21.png",
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
      <Breadcrm />
      <Heading mb={10} textAlign={"center"}>
        Make Your Bedroom as comfortable and pleasant as want with any of these
        accessories.
      </Heading>
      <SimpleGrid
        columns={
          isLargerThan950 ? 4 : isLargerThan700 ? 3 : isLargerThan400 ? 2 : 1
        }
        spacing={isLargerThan400 ? "24px" : "2rem"}
        margin={"auto"}
      >
        {imagescontainer.imageurl.map((image) => (
          <Box
            w={isLargerThan700 ? 250 : "95%"}
            m="auto"
            height={300}
            border={" 2px solid #6D9886 "}
            overflow="hidden"
            key={image.id}
          >
            <Image
              src={image.url}
              h={"100%"}
              alt="furniture images"
              transition={"0.5s"}
              _hover={{ transform: "scale(1.01)" }}
              onClick={() => {
                setimageNum(image.id);
                onOpen();
              }}
            />
          </Box>
        ))}
      </SimpleGrid>

      {/* Image Viewer */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxW={"900px"}
          p={isLargerThan700 ? 10 : 0}
          width={"100%"}
          height={"fit-content"}
        >
          <ModalHeader>Bedroom Accessories</ModalHeader>
          <ModalCloseButton />
          <ModalBody position={"relative"} p={0}>
            <Flex>
              <Image
                src={imagescontainer.imageurl[imageNum].url}
                alt="bed"
                width={"100%"}
                height={"60vh"}
                margin="auto"
                p={0}
              />
            </Flex>
            <Button
              position={"absolute"}
              top={"0"}
              left={0}
              backgroundColor={"transparent"}
              padding="11.5rem 0"
              _hover={{
                backgroundColor: "rgba(0, 0, 0, 0.137)",
                color: "#fff",
              }}
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
              top={"0"}
              right="0"
              backgroundColor={"transparent"}
              padding="11.5rem 0"
              _hover={{
                backgroundColor: "rgba(0, 0, 0, 0.137)",
                color: "#fff",
              }}
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
              _hover={{
                backgroundColor: "#4fa883",
              }}
            >
              <a
                href="https://wa.me/+237670502777"
                target="_blank"
                rel="noreferrer"
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

export default BedRoom;

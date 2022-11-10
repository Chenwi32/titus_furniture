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
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import Breadcrm from "./components/breadcrumb";


const Diningroom = () => {
  const [isLargerThan950] = useMediaQuery("(min-width: 950px)");
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const imagescontainer = {
    imageurl: [
      {
        id: 0,
        url: "https://i.ibb.co/p0CFpDJ/dining6.jpg",
      },

      {
        id: 1,
        url: "https://i.ibb.co/vBSD9kw/dining4.png",
      },

      {
        id: 2,
        url: "https://i.ibb.co/QCD1RCc/dining3.png",
      },

      {
        id: 3,
        url: "https://i.ibb.co/8mgqjkx/dining2.png",
      },

      {
        id: 4,
        url: "https://i.ibb.co/YT3NRFz/dining1.png",
      },

      {
        id: 5,
        url: "https://i.ibb.co/0MsYFxd/dining2.jpg",
      },

      {
        id: 6,
        url: "https://i.ibb.co/Bq4tLXy/Screenshot-20220513-205209.jpg",
      },

      {
        id: 7,
        url: "https://i.ibb.co/YDjcWyb/pantry.jpg",
      },

      {
        id: 8,
        url: "https://i.ibb.co/PmHpkzJ/Screenshot-20220830-064603.jpg",
      },
    ],
  };

  const [imageNum, setimageNum] = useState(0);

  return (
    <>
      {
        <Head>
          <title>Dining Room</title>
          <meta
            name="description"
            content="Titus' Furniture Dining room accessories page"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      }

      <Container maxW={1200} mt={10} mb={10}>
        <Breadcrm/>
        <Heading mb={10} textAlign={"center"}>
          Have a peasurable feeling during your meals
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
              w={isLargerThan400 ? 250 : "90%"}
              m="auto"
              height={300}
              border={" 2px solid #6D9886 "}
              overflow="hidden"
              key={image.id}
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
            </Box>
          ))}
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

export default Diningroom;

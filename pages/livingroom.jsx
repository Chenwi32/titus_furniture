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
        url: "https://i.ibb.co/8XwP5XJ/livingroom14.png",
      },

      {
        id: 9,
        url: "https://i.ibb.co/wprF6kv/livingroom9.jpg",
      },

      {
        id: 10,
        url: "https://i.ibb.co/2trNYRM/livingroom6.png",
      },

      {
        id: 11,
        url: "https://i.ibb.co/YRgyknb/livingroom15.png",
      },

      {
        id: 12,
        url: "https://i.ibb.co/bN59hJh/stools.jpg",
      },

      {
        id: 13,
        url: "https://i.ibb.co/4WHdCTj/tvstand2.jpg",
      },

      {
        id: 14,
        url: "https://i.ibb.co/1bLh6rN/tvstand1.jpg",
      },

      {
        id: 15,
        url: "https://i.ibb.co/FKLHzkF/tv-stand2.jpg",
      },

      {
        id: 16,
        url: "https://i.ibb.co/BCfcn0h/tv-stand.jpg",
      },

      {
        id: 17,
        url: "https://i.ibb.co/D1g1VXB/livingroom22.png",
      },

      {
        id: 18,
        url: "https://i.ibb.co/qM6n7gT/livingroom20.png",
      },

      {
        id: 19,
        url: "https://i.ibb.co/QDZ2W3D/livingroom21.png",
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
          Make Your Living room a leisure place with any of these sets.
        </Heading>
        <SimpleGrid
          columns={
            isLargerThan950 ? 4 : isLargerThan700 ? 3 : isLargerThan400 ? 2 : 1
          }
          spacing={isLargerThan700 ? "24px" : "1.5rem"}
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
            p={isLargerThan700? 10 : 0}
            maxWidth={"900px"}
            width={"100%"}
            height={"fit-content"}
          >
            <ModalHeader>Living Room Accessories</ModalHeader>
            <ModalCloseButton />
            <ModalBody p={0} position={"relative"}>
              <Flex >
                <Image
                  src={imagescontainer.imageurl[imageNum].url}
                  alt="living room accesories"
                  width={"100%"}
                  height={"60vh"}
                  margin="auto"
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

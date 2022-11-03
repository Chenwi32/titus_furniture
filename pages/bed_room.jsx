import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

const BedRoom = () => {
  const [isLargerThan950] = useMediaQuery("(min-width: 950px)");
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");

  return (
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
    </Container>
  );
};

export default BedRoom;

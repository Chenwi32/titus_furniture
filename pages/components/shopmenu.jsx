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
import Link from "next/link";

const Shopmenu = () => {
  const [isLargerThan950] = useMediaQuery("(min-width: 950px)");
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");

  return (
    <Container maxW={1200} mt={10} mb={10}>
      <Heading mb={10} textAlign={"center"}>
        Shop by Category
      </Heading>
      <SimpleGrid
        columns={
          isLargerThan950 ? 5 : isLargerThan700 ? 3 : isLargerThan400 ? 2 : 1
        }
        spacing={isLargerThan400 ? "24px" : "2rem"}
        margin={"auto"}
      >
        <Box
          boxShadow={"#6D9886 8px 8px 0px;"}
          w={isLargerThan400 ? 170 : "90%"}
          m="auto"
          height={200}
          border={" 2px solid #AF4920 "}
          transition={"0.5s"}
          _hover={{ transform: "translateY(-0.5rem)" }}
        >
          <Link href="/livingroom">
            <Flex direction={"column"}>
              <Image
                src="/images/living_room.jpg"
                h={"150px"}
                alt="furniture images"
              />

              <Text mt={2} textAlign={"center"} fontWeight={"600"}>
                Living Room
              </Text>
            </Flex>
          </Link>
        </Box>

        <Box
          boxShadow={" #E7CB43 8px 8px 0px;"}
          w={isLargerThan400 ? 170 : "90%"}
          m="auto"
          height={200}
          border={" 2px solid rgb(203 198 244) "}
          transition={"0.5s"}
          _hover={{ transform: "translateY(-0.5rem)" }}
        >
          <Link href="/diningroom">
            <Flex direction={"column"}>
              <Image
                src="/images/dining_room.jpg"
                h={"150px"}
                alt="furniture images"
              />

              <Text mt={2} textAlign={"center"} fontWeight={"600"}>
                Dining Room
              </Text>
            </Flex>
          </Link>
        </Box>

        <Box
          boxShadow={"#AF4920 8px 8px 0px;"}
          w={isLargerThan400 ? 170 : "90%"}
          m="auto"
          height={200}
          border={" 2px solid rgb(203 198 244) "}
          transition={"0.5s"}
          _hover={{ transform: "translateY(-0.5rem)" }}
        >
          <Link href="/bed_room">
            <Flex direction={"column"}>
              <Image
                src="/images/bed_room.jpg"
                h={"150px"}
                alt="furniture images"
              />

              <Text mt={2} textAlign={"center"} fontWeight={"600"}>
                Bedroom
              </Text>
            </Flex>
          </Link>
        </Box>

        <Box
          boxShadow={" #6D9886 8px 8px 0px;"}
          w={isLargerThan400 ? 170 : "90%"}
          m="auto"
          height={200}
          border={" 2px solid #AF4920 "}
          transition={"0.5s"}
          _hover={{ transform: "translateY(-0.5rem)" }}
        >
          <Link href="/homeoffice">
            <Flex direction={"column"}>
              <Image
                src="/images/home_office.jpg"
                h={"150px"}
                alt="furniture images"
              />

              <Text mt={2} textAlign={"center"} fontWeight={"600"}>
                Home Office
              </Text>
            </Flex>
          </Link>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Shopmenu;

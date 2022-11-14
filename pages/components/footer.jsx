import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const [isLargerThan730] = useMediaQuery("(min-width: 730px)");

  return (
    <Container maxW={1200} bg={"#000"} color={"brand.900"} padding={"5rem"}>
      <Flex justify="space-between" align="center">
        <Stack
          direction={"column"}
          spacing="24px"
          fontSize={"1.5rem"}
        >
          <Text>Folow us on:</Text>
          <HStack spacing="24px">
            <span>
              <FontAwesomeIcon icon={faFacebook} />
            </span>

            <a
              href="https://wa.me/+237670502777"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
            </a>

            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </HStack>
        </Stack>
        <Flex spacing="24px" mt={10} direction={'column'}>
          <Text mb={'1.5rem'}>
            Hours <br />
            
            <small>7:00 am - 6:00 pm. 7/7</small>
          </Text>

        
          <Text mb={'1.5rem'}>
            Location <br />
            
            <small>Nouvelle Route Nsimeyong- Yaounde</small>
          </Text>
          
          <Button
            borderRadius={"50%"}
            fontSize={"2.5rem"}
            padding={"1.8rem 0.7rem"}
            position={"fixed"}
            right="2.5rem"
            bottom={28}
            bg={"brand.800"}
            color={"brand.900"}
            _hover={{ backgroundColor: "#4fa883" }}
          >
            <a
              href="https://wa.me/+237670502777"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </Button>
        </Flex>
      </Flex>
      <Text mt={"1.5rem"}>
        <small>Copy right. All rights reserved | Titus Furniture 2022</small>
      </Text>
    </Container>
  );
};

export default Footer;

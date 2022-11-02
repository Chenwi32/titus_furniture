import { Box, Button, Container, Flex, HStack, Stack, useMediaQuery } from "@chakra-ui/react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {

    const [isLargerThan730] = useMediaQuery("(min-width: 730px)");

    return (
      <Container maxW={1200}>
        <Flex justify="space-between" align="center">
          <Stack direction={isLargerThan730 ? "row" : "column"} spacing="24px">
            <span>Facebook</span>
            <span>Whatsapp</span>
            <span>Instagram</span>
          </Stack>
          <Stack direction={["column", "row"]} spacing="24px">
            <span>Facebook</span>
            <Button
              borderRadius={"50%"}
              fontSize={"3rem"}
              padding={"1.9rem 0.7rem"}
              position={"fixed"}
              bottom={28}
              bg={"brand.800"}
              color={"brand.900"}
              _hover={{ backgroundColor: "#2a69ac" }}
            >
              <a href="https://wa.me/+237670502777" target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              
            </Button>

            <span>Instagram</span>
          </Stack>
        </Flex>
      </Container>
    );
}

export default Footer;
import { Container, Flex, HStack } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Container maxW={1200}>
            <Flex justify='space-between' align='center'>
                <HStack>
                    <span>Facebook</span>
                    <span>Whatsapp</span>
                    <span>Instagram</span>
                </HStack>
                <HStack>
                    <span>Facebook</span>
                    <span>Whatsapp</span>
                    <span>Instagram</span>
                </HStack>
</Flex>
        </Container>
    );
}

export default Footer;
import { Container, Flex, HStack, Stack } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Container maxW={1200}>
            <Flex justify='space-between' align='center'>
                <Stack direction={['column', 'row']} spacing='24px'>
                    <span>Facebook</span>
                    <span>Whatsapp</span>
                    <span>Instagram</span>
                </Stack>
                <Stack direction={['column', 'row']} spacing='24px'>
                    <span>Facebook</span>
                    <span>Whatsapp</span>
                    <span>Instagram</span>
                </Stack>
</Flex>
        </Container>
    );
}

export default Footer;
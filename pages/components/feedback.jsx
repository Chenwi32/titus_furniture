import { Flex, Heading } from "@chakra-ui/react"
import Fromclients from "./fromclients";


const Feedback = () => {
    return (
        <Flex
            m={5}
            mb={10} direction={'column'}>
            <Heading mb={10}>
                Feedback From Our Customers
            </Heading>
            <Fromclients/>
        </Flex>
    );
}

export default Feedback;
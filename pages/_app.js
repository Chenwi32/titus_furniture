import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import Layout from "./components/layout";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#fff',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors });


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </ChakraProvider>
    
  );
}

export default MyApp;

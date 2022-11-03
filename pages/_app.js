import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import Layout from "./components/layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#fff",
    800: "#6D9886",
    700: "#4fa883",
    600: "rgba(255, 255, 255, 0.658)",
  },
};

const theme = extendTheme({ colors});


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

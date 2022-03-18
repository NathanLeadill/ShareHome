import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.scss";
import { Provider } from "react-redux";
import store from "@redux/store";
import Nav from "@components/nav";
import { Footer } from "@components/footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <>
          <Head>
            <title>ShareHome</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;

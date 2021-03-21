import * as React from "react";
import { AppProps } from "next/app";

import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}


function getLibrary(provider) {
  return new Web3Provider(provider);
}



const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <GlobalStyle />
      <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      </Web3ReactProvider>
    </>
  );
};

export default App;
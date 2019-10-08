import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-position: too center;
    background-size: top center;
    background-color: #F0F8FF;
    width: 100%;
    margin: 0;
    font-family: "Gill Sans", sans-serif;
  }
`;

export default class MyApp extends App {
  static async getInitialProps(appContext) {
    const appProps = await App.origGetInitialProps(appContext);

    return { appProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <Head>
          <title>To do</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

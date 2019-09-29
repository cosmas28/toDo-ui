import React from 'react';
import App from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {
  static async getInitialProps(appContext) {
    const appProps = await App.origGetInitialProps(appContext);

    return { appProps }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>To do</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Component {...pageProps}/>
      </>
    )
  }
}

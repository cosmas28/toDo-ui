import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'mobx-react';

import RootStore from '../stores';
import { ToDoList } from '../stores/ToDoStore';

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

type GetInitialProps = {
  initialMobxState: ToDoList[];
  pageProps: {};
};

export default class MyApp extends App {
  state = {
    store: new RootStore(),
  };

  static async getInitialProps(appContext): Promise<GetInitialProps> {
    const appProps = await App.getInitialProps(appContext);
    const store = new RootStore();
    await store.toDoStore.getAllToDos();
    const initialStoreState = store.toDoStore.toDoList;

    return {
      ...appProps,
      initialMobxState: initialStoreState,
    };
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <Head>
          <title>To do</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Provider store={this.state.store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

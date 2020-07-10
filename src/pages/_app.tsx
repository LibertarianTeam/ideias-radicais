import React from "react";
import Head from "next/head";

import { NextComponentType } from "next";

import "../assets/css/main.css";

export type AppLayout = {
  Component: NextComponentType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
};

export default function App({ Component, pageProps }: AppLayout): JSX.Element {
  return (
    <div className="__layout">
      <Head>
        <title>Ideias Radicais</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps}></Component>
    </div>
  );
}

import React from "react";
import Head from "next/head";

import styles from "./.module.css";

export default function About(): JSX.Element {
  return (
    <main>
      <Head>
        <title>Sobre - Ideias Radicais</title>
      </Head>

      <h1 className={styles.title}>Sobre</h1>
    </main>
  );
}

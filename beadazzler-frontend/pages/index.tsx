import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";
import { Header } from "@/components/Header";
import { ImageUploader } from "@/components/ImageUploader";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Beadazzler</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <Header />

      <main>
        <Layout />
      </main>

      <footer className={styles.footer}>Originally made for my wife</footer>
    </div>
  );
}

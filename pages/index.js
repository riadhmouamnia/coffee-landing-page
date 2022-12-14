import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Landing Page</title>
        <meta name="description" content="Coffee landing page design" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />

      <Main />

      <Footer />
    </div>
  );
}

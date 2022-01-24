import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Cats Life</title>
        <meta name="description" content="Welcome to my cat's app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2>Visit cats</h2>
        <button onClick={() => router.push("/cats")}>
          Take me to the cats
        </button>
      </main>
    </div>
  );
}

import Image from "next/image";
import { run } from "./langchain";
import styles from "./page.module.css";

export default async function Home() {
  const result = await run();

  return (
    <main className={styles.main}>
      <dev>
        <p>Hola Mundo</p>
        <p>{result}</p>
      </dev>
    </main>
  );
}

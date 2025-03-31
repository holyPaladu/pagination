import "./styles/index.scss";
import styles from "./App.module.scss";
import { Pagination } from "../features/Pagination";

function App() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.main__wrapper}>
          <h1 className={styles.main__title}>Pagination</h1>
          <section className={styles.main__section}>
            <h2>Looped pagination</h2>
            <Pagination totalPages={10} isLooped={true} />
          </section>
          <section className={styles.main__section}>
            <h2>Regular pagination</h2>
            <Pagination totalPages={10} isLooped={false} />
          </section>
          <section className={styles.main__section}>
            <h2>Looped pagination with forward and backward</h2>
            <Pagination totalPages={10} isLooped={true} step={5} />
          </section>
          <section className={styles.main__section}>
            <h2>Regular pagination with forward and backward</h2>
            <Pagination totalPages={10} isLooped={false} step={5} />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;

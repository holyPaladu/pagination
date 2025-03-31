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
        </div>
      </main>
    </>
  );
}

export default App;

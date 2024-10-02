import styles from "./header.module.css";
export default function Header() {
  return (
    <>
      <header className={styles.headerMain}>
        <h1 className={styles.headerTitle}>GemWeb</h1>
      </header>
    </>
  );
}

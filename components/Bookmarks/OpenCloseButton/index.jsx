import styles from "./index.module.scss";

function OpenCloseButton({ toggle }) {
  return (
    <button
      className={styles.OpenCloseButton}
      onClick={() => toggle((state) => !state)}
    >
      Bookmarks
    </button>
  );
}

export default OpenCloseButton;

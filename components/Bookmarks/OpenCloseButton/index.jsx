import styles from "./index.module.scss";

function OpenCloseButton({ toggle }) {
  return (
    <button
      className={styles.OpenCloseButton}
      title='Bookmarks'
      onClick={() => toggle((state) => !state)}
    >
      ★
    </button>
  );
}

export default OpenCloseButton;

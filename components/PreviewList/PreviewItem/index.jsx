import styles from "./index.module.scss";

function PreviewItem({ id, title, url, preview, addBookmark, removeBookmark }) {
  return (
    <li className={styles.PreviewItem}>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={url}
        className={styles.link}
      >
        <img className={styles.image} src={preview} alt={title} />
        <div className={styles.title}>{title}</div>
      </a>
      {addBookmark && (
        <button
          type='button'
          className={styles.button}
          onClick={() => addBookmark(id)}
        >
          Add to bookmarks
        </button>
      )}
      {removeBookmark && (
        <button
          type='button'
          className={styles.button}
          onClick={() => removeBookmark(id)}
        >
          Remove from bookmarks
        </button>
      )}
    </li>
  );
}

export default PreviewItem;

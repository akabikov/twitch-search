import PreviewItem from "./PreviewItem";
import styles from "./index.module.scss";

function PreviewList({ list, addBookmark, removeBookmark }) {
  const previews = list.map((item) => (
    <PreviewItem
      key={item.id}
      {...item}
      addBookmark={addBookmark}
      removeBookmark={removeBookmark}
    />
  ));

  return <ul className={styles.PreviewList}>{previews}</ul>;
}

export default PreviewList;

import { useState, useEffect } from "react";
import { getVideoById } from "../../helpers/loading";
import PreviewList from "../PreviewList";
import styles from "./index.module.scss";

function Bookmarks({ list, isOpen, removeBookmark }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    async function getVideos() {
      const videos = await Promise.all(list.map((id) => getVideoById(id)));
      setState(
        videos.map(({ title, url, preview }, i) => ({
          id: list[i],
          title,
          url,
          preview: preview.large,
        }))
      );
    }

    getVideos();
  }, [list]);

  return (
    <div className={styles.Bookmarks + (isOpen ? "" : ` ${styles.hidden}`)}>
      {state && <PreviewList list={state} removeBookmark={removeBookmark} />}
    </div>
  );
}

export default Bookmarks;

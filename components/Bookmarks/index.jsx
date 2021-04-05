import { useState, useEffect } from "react";
import PreviewList from "../PreviewList";
import { getVideoById } from "../../helpers/loading";

function Bookmarks({ list, removeBookmark }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    async function getVideos() {
      const videos = await Promise.all(list.map((id) => getVideoById(id)));
      setState(
        videos.map(({ title, url, preview }, i) => ({
          id: list[i],
          title,
          url,
          preview: preview.small,
        }))
      );
    }

    getVideos();
  }, [list]);

  return (
    <>
      <h2>Bookmarks</h2>
      {state && <PreviewList list={state} removeBookmark={removeBookmark} />}
    </>
  );
}

export default Bookmarks;

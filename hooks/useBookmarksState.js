import useStorageState from "./useStorageState";

function useBookmarksState() {
  const [bookmarks, setBookmarks] = useStorageState("bookmarks", []);

  const handlers = {
    add(id) {
      if (bookmarks.some((el) => el === id)) return;
      setBookmarks([...bookmarks, id]);
    },

    remove(id) {
      setBookmarks(bookmarks.filter((el) => el !== id));
    },
  };

  return [bookmarks, handlers];
}

export default useBookmarksState;

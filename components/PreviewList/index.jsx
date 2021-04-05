import PreviewItem from "./PreviewItem";

function PreviewList({ list, addBookmark, removeBookmark }) {
  const previews = list.map((item) => (
    <PreviewItem
      key={item.id}
      {...item}
      addBookmark={addBookmark}
      removeBookmark={removeBookmark}
    />
  ));

  return <ul>{previews}</ul>;
}

export default PreviewList;

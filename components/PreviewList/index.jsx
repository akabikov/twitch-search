import PreviewItem from "./PreviewItem";

function PreviewList({ list, handleAddBookmark }) {
  const previews = list.map((item) => (
    <PreviewItem key={item.id} {...item} addBookmark={handleAddBookmark} />
  ));

  return <ul>{previews}</ul>;
}

export default PreviewList;

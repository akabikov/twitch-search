function PreviewItem({ id, title, url, preview, addBookmark, removeBookmark }) {
  return (
    <li>
      <img src={preview} alt={title} />
      <a target='_blank' rel='noopener noreferrer' href={url}>
        {title}
      </a>
      {addBookmark && (
        <button type='button' onClick={() => addBookmark(id)}>
          Add to bookmarks
        </button>
      )}
      {removeBookmark && (
        <button type='button' onClick={() => removeBookmark(id)}>
          Remove from bookmarks
        </button>
      )}
    </li>
  );
}

export default PreviewItem;

function PreviewItem({ id, title, url, preview, addBookmark }) {
  return (
    <li>
      <img src={preview} alt={title} />
      <a target='_blank' rel='noopener noreferrer' href={url}>
        {title}
      </a>
      <button type='button' onClick={() => addBookmark(id)}>
        Add to bookmarks
      </button>
    </li>
  );
}

export default PreviewItem;

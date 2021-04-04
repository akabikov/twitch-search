function Bookmarks({ list, handleRemoveBookmark }) {
  return (
    <>
      <h2>Bookmarks</h2>
      <ul>
        {list.map((id) => (
          <li key={id}>
            {id}{" "}
            <button type='button' onClick={() => handleRemoveBookmark(id)}>
              Remove bookmark
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Bookmarks;

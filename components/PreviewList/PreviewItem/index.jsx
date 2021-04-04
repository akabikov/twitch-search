function PreviewItem({ id, title, url, preview }) {
  return (
    <li>
      <img src={preview} alt={title} />
      <a target='_blank' rel='noopener noreferrer' href={url}>
        {title}
      </a>
    </li>
  );
}

export default PreviewItem;

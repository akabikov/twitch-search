import PreviewItem from "./PreviewItem";

function PreviewList({ list }) {
  const previews = list.map(({ id, ...args }) => (
    <PreviewItem key={id} {...args} />
  ));

  return <ul>{previews}</ul>;
}

export default PreviewList;

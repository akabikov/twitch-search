import { useState } from "react";
import SearchForm from "../components/SearchForm";
import PreviewList from "../components/PreviewList";
import Bookmarks from "../components/Bookmarks";
import BookmarksOpenCloseButton from "../components/Bookmarks/OpenCloseButton";
import useBookmarksState from "../hooks/useBookmarksState";
import { getChannelsByName, getVideosByChannelId } from "../helpers/loading";

const Index = ({ previews, channelName }) => {
  const [bookmarks, handlers] = useBookmarksState();
  const [isBookmarksOpen, openCloseBookmarks] = useState(false);

  return (
    <>
      <SearchForm value={channelName} />
      <BookmarksOpenCloseButton toggle={openCloseBookmarks} />
      {previews.length ? (
        <PreviewList list={previews} addBookmark={handlers.add} />
      ) : (
        <div>Nothing found</div>
      )}
      <Bookmarks
        list={bookmarks}
        isOpen={isBookmarksOpen}
        removeBookmark={handlers.remove}
      />
    </>
  );
};

export default Index;

export async function getServerSideProps({ query }) {
  const channelName = query.q;
  const { channels, _total: channelsTotal } = await getChannelsByName(
    channelName
  );
  const ids = channels.map(({ _id }) => _id);
  const { videos, _total: videosTotal } = await getVideosByChannelId(ids[0]);
  const previews = videos.map(({ title, url, preview, _id }) => ({
    id: _id.slice(1),
    title,
    url: url,
    preview: preview.large,
  }));
  return { props: { previews, channelName } };
}

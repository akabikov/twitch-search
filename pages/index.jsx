import SearchForm from "../components/SearchForm";
import PreviewList from "../components/PreviewList";
import Bookmarks from "../components/Bookmarks";
import useBookmarksState from "../hooks/useBookmarksState";
import { getChannelsByName, getVideosByChannelId } from "../helpers/loading";

const Index = ({ previews, channelName }) => {
  const [bookmarks, handlers] = useBookmarksState();

  return (
    <>
      <h1>Twitch search project</h1>
      <SearchForm value={channelName} />
      <PreviewList list={previews} addBookmark={handlers.add} />
      <Bookmarks list={bookmarks} removeBookmark={handlers.remove} />
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
    preview: preview.small,
  }));
  return { props: { previews, channelName } };
}

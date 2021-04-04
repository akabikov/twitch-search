import axios from "axios";
import SearchForm from "../components/SearchForm";
import PreviewList from "../components/PreviewList";
import Bookmarks from "../components/Bookmarks";
import useBookmarksState from "../hooks/useBookmarksState";

const API_SEARCH_URL = (channelName) =>
  `https://api.twitch.tv/kraken/search/channels?query=${channelName}`;
const API_VIDEOS_URL = (channelId) =>
  `https://api.twitch.tv/kraken/channels/${channelId}/videos?limit=20`;

const API_HEADERS = {
  Accept: "application/vnd.twitchtv.v5+json",
  "Client-ID": process.env.CLIENT_ID,
};

const Index = ({ previews, channelName }) => {
  const [bookmarks, handlers] = useBookmarksState();

  return (
    <>
      <h1>Twitch search project</h1>
      <SearchForm value={channelName} />
      <PreviewList list={previews} handleAddBookmark={handlers.add} />
      <Bookmarks list={bookmarks} handleRemoveBookmark={handlers.remove} />
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

async function getChannelsByName(channelName) {
  try {
    const response = await axios.get(API_SEARCH_URL(channelName), {
      headers: API_HEADERS,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getVideosByChannelId(channelId) {
  try {
    const response = await axios.get(API_VIDEOS_URL(channelId), {
      headers: API_HEADERS,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

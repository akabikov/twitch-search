import axios from "axios";

const API_SEARCH_URL = (channelName) =>
  `https://api.twitch.tv/kraken/search/channels?query=${channelName}`;
const API_VIDEOS_URL = (channelId) =>
  `https://api.twitch.tv/kraken/channels/${channelId}/videos?limit=20`;

const API_HEADERS = {
  Accept: "application/vnd.twitchtv.v5+json",
  "Client-ID": process.env.CLIENT_ID,
};

async function get(url) {
  try {
    const response = await axios.get(url, {
      headers: API_HEADERS,
    });
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getChannelsByName(channelName) {
  return get(API_SEARCH_URL(channelName));
}

export async function getVideosByChannelId(channelId) {
  return get(API_VIDEOS_URL(channelId));
}


import axios from "axios";

const API_SEARCH_URL = (channelName) =>
  `https://api.twitch.tv/kraken/search/channels?query=${channelName}`;
const API_VIDEOS_URL = (channelId) =>
  `https://api.twitch.tv/kraken/channels/${channelId}/videos?limit=20`;

const API_VIDEO_URL = (videoId) =>
  `https://api.twitch.tv/kraken/videos/${videoId}`;

const API_HEADERS = {
  Accept: "application/vnd.twitchtv.v5+json",
  "Client-ID": process.env.NEXT_PUBLIC_CLIENT_ID,
};

async function get(url) {
  try {
    const response = await axios.get(url, {
      headers: API_HEADERS,
    });
    if (response.status) return response.data;
  } catch (error) {
    if (error.response) {
      console.error(error.response.status);
      console.log(error.response.data);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.error("Error", error.message);
    }
    console.error(error);
  }
}

export async function getChannelsByName(channelName) {
  return get(API_SEARCH_URL(channelName));
}

export async function getVideosByChannelId(channelId) {
  return get(API_VIDEOS_URL(channelId));
}

export async function getVideoById(videoId) {
  return get(API_VIDEO_URL(videoId));
}

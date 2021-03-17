import axios from "axios";
const KEY = "AIzaSyD8lBl0HFlDormoaA2SDS3d8WHzgbhk7xU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "statistics",
    maxResult: 10,
    key: KEY,
  },
  headers: {},
});

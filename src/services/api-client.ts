import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2cf13effc34f493483a0ad2c6d1f4b91",
  },
});

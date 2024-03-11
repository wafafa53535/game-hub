import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "98653b340b0f44dc93763debac73c7dd",
  },
});

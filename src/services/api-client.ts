import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e6ce98caa71c42a18671606ed28e7cd5",
  },
});

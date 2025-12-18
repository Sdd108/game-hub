import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "269c478cffd14dcd9c9283dd4f2e4d22"
  }
});

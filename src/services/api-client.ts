import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "269c478cffd14dcd9c9283dd4f2e4d22"
  }
});

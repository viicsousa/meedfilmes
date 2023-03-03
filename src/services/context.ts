import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/550?api_key=74af26e894ff402944b1a7c7bd816119",
});
import axios from "axios";

const client = axios.create({ baseURL: "https://movie-review-app-backend-production.up.railway.app/api" });

export default client;

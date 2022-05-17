import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const signIn = (FormData) => API.post("/users/signin", FormData);

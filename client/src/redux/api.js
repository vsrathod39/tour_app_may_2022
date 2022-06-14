import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const signIn = (FormData) => API.post("/users/signin", FormData);
export const signUp = (FormData) => API.post("/users/signup", FormData);
export const googlesignin = (result) => API.post("/users/googlesignin", result);

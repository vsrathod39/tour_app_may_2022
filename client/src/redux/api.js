import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  // console.log(JSON.parse(localStorage.getItem("profile")).token);
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (FormData) => API.post("/users/signin", FormData);
export const signUp = (FormData) => API.post("/users/signup", FormData);
export const googlesignin = (result) => API.post("/users/googlesignin", result);

export const createTour = (tourData) => API.post("/tours", tourData);

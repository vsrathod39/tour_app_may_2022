import axios from "axios";

const devEnv = process.env.NODE_ENV !== "production";

const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;

const API = axios.create({
  baseURL: devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL,
});

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
export const getTours = (page) => API.get(`/tours?page=${page}`);
export const getTour = (id) => API.get(`/tours/${id}`);
export const getToursByUser = (userId) => API.get(`/tours/usertours/${userId}`);
export const deleteTour = (id) => API.delete(`/tours/${id}`);
export const updateTour = (updatedTourData, id) =>
  API.patch(`/tours/${id}`, updatedTourData);

export const getToursBySearch = (searchQuery) =>
  API.get(`/tours/search?searchQuery=${searchQuery}`);
export const getTagTours = (tag) => API.get(`/tours/tag/${tag}`);
export const getRelatedTours = (tags) => API.post(`/tours/relatedtours`, tags);
export const likeTour = (id) => API.patch(`/tours/like/${id}`);

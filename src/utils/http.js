import axios from "axios";

// const baseURL = "https://crudcrud.com/api/fe69b7b48bf94a24af8432236a922f9b";
// const baseURL = "https://crudcrud.com/api/c48eac3688ae4bd9b6491e3d1569a8d4";
const baseURL = "https://61cbf072198df60017aebdb7.mockapi.io/api";

const api = axios.create({
  baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json;charset=utf-8",
  },
});

export const getPosts = async () => {
  const { data } = await api.get("/posts");
  return data;
};

export const addNewPost = async (body) => {
  const { data } = await api.post("/posts", body);
  return data;
};

export const getSinglePost = async (id) => {
  const { data } = await api.get(`/posts/${id}`);
  return data;
};

export const editSinglePost = async (id, body) => {
  const { data } = await api.put(`/posts/${id}`, body);
  return data;
};

export const deleteSinglePost = async (id) => {
  await api.delete(`/posts/${id}`);
  return null;
};

export default api;

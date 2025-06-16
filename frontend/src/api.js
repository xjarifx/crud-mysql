import axios from "axios";

const API = axios.create({
  baseURL: "https://crud-mysql-fnqd.onrender.com",
});

export const getItems = () => API.get("/items");
export const createItem = (item) => API.post("/items", item);
export const updateItem = (id, item) => API.put(`/items/${id}`, item);
export const deleteItem = (id) => API.delete(`/items/${id}`);

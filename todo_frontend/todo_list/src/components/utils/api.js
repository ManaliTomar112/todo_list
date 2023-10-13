import axios from "axios";

const BASE_URL = "http://localhost:5000/tasks";

export const getRequest = async (endPoint) => {
  const res = await axios.get(BASE_URL + endPoint);
  return res.data;
};

export const postRequest = async (endPoint, value) => {
  const res = await axios.post(BASE_URL + endPoint, value);
  return res.data;
};

export const updateRequest = async (endPoint, value) => {
  const res = await axios.put(BASE_URL + endPoint, value);
  return res.data;
};

export const deleteRequest = async (endPoint) => {
  const res = await axios.delete(BASE_URL + endPoint);
  return res.data;
};

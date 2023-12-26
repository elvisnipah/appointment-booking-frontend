import axios from "axios";

const loggedInUser = window.localStorage.getItem("loggedInUser");

let token = null;

if (loggedInUser) {
  token = `Bearer ${JSON.parse(loggedInUser).token}`;
}

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const baseUrl = "/api/bookings";

const getAll = async (data) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(baseUrl, config);
  return response.data;
};

const create = async (data) => {
  const response = await axios.post(`${baseUrl}`, data);
  console.log(response.data);
  return response.data;
};

export default { create, getAll, setToken };

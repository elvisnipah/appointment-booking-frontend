import axios from "axios";

const baseLoginUrl = "/api/login";

const login = async (creds) => {
  const response = await axios.post(baseLoginUrl, creds);
  return response.data;
};

const checkLogin = async (token) => {
  const response = await axios.post(`${baseLoginUrl}/verify`, { token });
  return response.data;
};

export default { login, checkLogin };

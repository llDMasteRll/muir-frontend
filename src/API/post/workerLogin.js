import api from "../API";

const workerLogin = async ({ username, password }) => {
  try {
    const response = await api.post("/auth/login", {
      role: "crew",
      username,
      password
    });
    const token = response.data.accessToken;
    localStorage.setItem("accessToken", token);
    return token;
  } catch (error) {
    return null;
  }
};

export default workerLogin;
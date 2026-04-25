import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

// Добавляем accessToken в каждый запрос
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Авто-обновление accessToken
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // если accessToken истёк
    if (
      error.response?.status === 403 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const res = await api.post("/refresh");
        const newToken = res.data.accessToken;

        localStorage.setItem("accessToken", newToken);

        // обновляем header и повторяем запрос
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        // если refresh тоже истёк — разлогиниваем
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
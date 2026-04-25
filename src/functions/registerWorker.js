async function register(username, password) {
  const response = await api.post("/register", {
    username,
    password,
    role: "crew", // если нужно
  });

  localStorage.setItem("accessToken", response.data.accessToken);
}
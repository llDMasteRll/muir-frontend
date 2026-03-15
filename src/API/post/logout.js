async function logout() {
  await api.post("/logout");
  localStorage.removeItem("accessToken");
}
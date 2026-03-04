import { jwtDecode } from "jwt-decode";
import api from "./API"

async function fetchCrew() {
  const token = jwtDecode(localStorage.getItem("accessToken"));
  const ship_id = token.ship_id;
  const response = await api.get("/crew", {
    params: { ship_id: ship_id },
  });
  return response.data;
}

export default fetchCrew;
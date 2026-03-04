import { jwtDecode } from "jwt-decode";
import api from "./API";

async function deleteCrew(worker_id) {
  const ship_id = jwtDecode(localStorage.getItem("accessToken"));

  const response = await api.delete(`/crew/${worker_id}`, {
    params: {
      worker_id: worker_id,
      ship_id: ship_id
    }
  });

  return response.data;
}

export default deleteCrew;
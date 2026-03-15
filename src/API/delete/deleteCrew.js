import { jwtDecode } from "jwt-decode";
import api from "../API";

async function deleteCrew(worker_id) {
  const response = await api.delete(`/crew/${worker_id}`, { worker_id: worker_id });

  return response.data;
}

export default deleteCrew;
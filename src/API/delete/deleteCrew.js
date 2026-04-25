import api from "../API";

async function deleteCrew(worker_id) {
  const response = await api.delete(`/crew/${worker_id}`);
  return response.data;
}

export default deleteCrew;
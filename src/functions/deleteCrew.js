import axios from "axios";

export default async function deleteCrew(id) {
  const response = await axios.delete(`http://localhost:3030/crew/${id}`);
  return response.data;
}

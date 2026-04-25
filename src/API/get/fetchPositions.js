import api from "../API"

async function fetchPositions() {
  const response = await api.get("/positions");
  return response.data;
}

export default fetchPositions;
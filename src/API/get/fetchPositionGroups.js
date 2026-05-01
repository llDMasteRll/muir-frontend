import api from "../API"

async function fetchPositions() {
  const response = await api.get("/positions/groups");
  return response.data;
}

export default fetchPositions;
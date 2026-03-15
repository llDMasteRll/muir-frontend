import api from "../API"

async function fetchPositions() {
  const response = await api.get("/position_groups");
  return response.data;
}

export default fetchPositions;
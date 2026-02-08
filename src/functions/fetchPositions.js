import axios from "axios";

async function fetchCrew(page) {
  const response = await axios.get("http://localhost:3030/positions");
  return response.data;
}

export default fetchCrew;


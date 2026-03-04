import axios from "axios";

async function fetchCrew(page) {
  const apiUrl = process.env.REACT_APP_API_URL;

  const response = await axios.get(`${apiUrl}/positions`);
  return response.data;
}

export default fetchCrew;


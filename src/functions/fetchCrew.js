import axios from "axios";

async function fetchCrew(page) {
  const response = await axios.get("http://localhost:3030/crew", {
    params: {
      _page: page
    }
  });
  console.log(response.data);
  return response.data;
}

export default fetchCrew;


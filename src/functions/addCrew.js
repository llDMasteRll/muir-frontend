import api from "./API";

async function addCrew(data) {

  const response = await api.post("/crew", {
    position_id: data.position_id,
    full_name: data.full_name,
    date_of_birth: data.date_of_birth,
    sign_on_date: data.sign_on_date,
    sign_off_date: data.sign_off_date,
  });
  return response.data;
}

export default addCrew;

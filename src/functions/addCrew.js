import axios from "axios";

async function addCrew(data) {
    console.log(data);
    axios.post("http://localhost:3030/crew", {
        position: data.position,
        first_name: data.first_name,
        last_name: data.last_name,
        date_of_birth: data.date_of_birth,
        sign_on_date: data.sign_on_date,
        sign_off_date: data.sign_off_date,
        status: data.status
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default addCrew;

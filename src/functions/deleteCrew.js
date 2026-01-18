import axios from "axios";

async function deleteCrew(id) { 
    console.log(id)
    axios.delete(`http://localhost:3030/crew/${id}`)
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
}

export default deleteCrew;
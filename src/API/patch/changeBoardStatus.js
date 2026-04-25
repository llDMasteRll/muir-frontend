import api from "../API";

async function changeBoardStatus(worker_id, date, status) {
    const response = await api.patch(`/crew/status/${worker_id}`, { date, status });
    return response.data;
}

export default changeBoardStatus;
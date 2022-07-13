import axios from "axios";

const getReservedTimesService = async (time) => {
    const response = await axios.get(`http://localhost:8000/api/dates/${time}`);
    return response.data;
}

export default getReservedTimesService

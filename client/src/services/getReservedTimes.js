import axios from "axios";

const getReservedTimes = async (time) => {
    const response = await axios.get(`http://localhost:8000/api/dates/${time}`);
    return response.data;
}

export default getReservedTimes
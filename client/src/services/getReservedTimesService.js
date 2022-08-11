import axios from "axios";

const getReservedTimesService = async (time) => {
    const response = await axios.get(`/server/public/api/dates/${time}`);
    return response.data;
}

export default getReservedTimesService

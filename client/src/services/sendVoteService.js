import axios from "axios";

const sendVoteService = async (id, data) => {
    const response = await axios.patch(`/server/public/api/votes/${id}`, data);
    return response.data;
}

export default sendVoteService
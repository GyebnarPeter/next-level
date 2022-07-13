import axios from "axios";

const sendVote = async (id, data) => {
    const response = await axios.patch(`http://localhost:8000/api/votes/${id}`, data);
    return response.data;
}

export default sendVote
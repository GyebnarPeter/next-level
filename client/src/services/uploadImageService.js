import axios from "axios";

const uploadImageService = async (image) => {
    const response = await axios.post("/server/public/api/add-temp", image);
    return response.data;
}

export default uploadImageService

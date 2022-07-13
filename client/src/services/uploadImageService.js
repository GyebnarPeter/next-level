import axios from "axios";

const uploadImageService = async (image) => {
    const response = await axios.post("http://localhost:8000/api/add-temp", image);
    return response.data;
}

export default uploadImageService

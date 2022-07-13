import axios from "axios";

const uploadImage = async (image) => {
    const response = await axios.post("http://localhost:8000/api/add-temp", image);
    return response.data;
}

export default uploadImage

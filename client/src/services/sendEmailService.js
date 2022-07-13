import axios from "axios";

const sendEmailService = async (data) => {
    await axios.post("http://localhost:8000/api/contact-form", data);
}

export default sendEmailService
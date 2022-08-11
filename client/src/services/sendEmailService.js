import axios from "axios";

const sendEmailService = async (data) => {
    await axios.post("/server/public/api/contact-form", data);
}

export default sendEmailService
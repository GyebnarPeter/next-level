import axios from 'axios';

const postBooking = async (data) => {
    await axios
        .post("http://localhost:8000/api/bookings", data)
        .then( res => console.log(res.data))
        .catch( error => console.error(error))
}

export default postBooking

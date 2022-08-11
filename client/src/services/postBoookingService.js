import axios from 'axios';

const postBooking = async (data) => {
    await axios
        .post("/server/public/api/bookings", data)
        .then( res => console.log(res.data))
        .catch( error => console.error(error))
}

export default postBooking

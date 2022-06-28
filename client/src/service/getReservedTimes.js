import axios from 'axios';

const getReservedTimes = async (url, data) => {
    await axios
        .get(url, data)
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            console.log(error);
        });
};

export default getReservedTimes;

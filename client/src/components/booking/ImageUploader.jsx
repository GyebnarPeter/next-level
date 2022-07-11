import React, { useState } from "react";
import "./imageUploader.css";
const axios = require("axios").default;

function ImageUploader({ bookingData, setBookingData, setBookingPage }) {
    const [imageUrl, setImageUrl] = useState();
    
    const uploadHandler = (e) => {
        const file = e.target.files[0];
        setImageUrl(URL.createObjectURL(file));

        const url = "http://localhost:8000/api/add-temp";
        const data = new FormData();
        data.append('img', file);

        axios
            .post(url, data)
            .then(function(response) {
                setBookingData({
                    ...bookingData,
                    img: response.data
                })
            })
            .catch(function(error) {
                console.error(error);
            });
    }

    const nextPage = () => {
        setBookingPage("booking-summary");
    }

    return (
        <div className="imageUploader">
            <div className="imageUploaderWrp">
                <input type="file" className="image" onChange={ uploadHandler } />
                <div className="upload">
                    <h4>Feltöltött kép</h4>
                    <div className="uploaded-image">
                        <img
                            src={imageUrl}
                            alt=""
                            onError={(event) =>
                                (event.target.style.display = "none")
                            }
                        />
                    </div>
                </div>
            </div>
            <button onClick={nextPage}>Tovább</button>
        </div>
    );
}

export default ImageUploader;

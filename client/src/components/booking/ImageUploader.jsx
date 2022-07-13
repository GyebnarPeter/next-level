import React, { useState } from "react";
import uploadImageService from "../../services/uploadImageService";
import "./imageUploader.css";

function ImageUploader({ bookingData, setBookingData, setBookingPage }) {
    const [imageUrl, setImageUrl] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const [images, setImages] = useState([]);
    
    const uploadHandler = async (e) => {
        setErrorMessage("");

        const file = e.target.files[0];
        setImageUrl(URL.createObjectURL(file));

        const data = new FormData();
        data.append('img', file);

        const imageName = await uploadImageService(data);

        setBookingData({ ...bookingData, img: imageName });
        setImages([ ...images, imageName ]);
    }

    const nextPage = (e) => {
        e.preventDefault();

        if(!imageUrl) {
            setErrorMessage("Tölts fel képet!");
        } else {
            setBookingData({ ...bookingData, tempImages: images })
            setBookingPage("booking-summary");
        }
    }

    return (
        <form className="imageUploader" onSubmit={nextPage}>
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
            <input type="submit" value="Tovább" />
            <p className="imageUploaderErrorText">
                {errorMessage}
            </p>
        </form>
    );
}

export default ImageUploader;

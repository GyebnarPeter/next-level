import React from "react";
import "./imageUploader.css";
import remove from "../../images/close-blue.webp";

function ImageUploader() {
    return (
        <div className="imageUploader">
            <input type="file" className="image" />
            <div className="upload">
                <h4>Feltöltött kép</h4>
                <div className="uploaded-image">
                    <img src="" alt="" onError={(event) => event.target.style.display = 'none'}/>
                    <span className="removeImageBtn">
                        <img src={remove} alt="torles" />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ImageUploader;

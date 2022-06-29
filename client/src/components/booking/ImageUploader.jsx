import React from "react";
import "./imageUploader.css";
import remove from "../../images/close-blue.webp";
const axios = require("axios").default;

function ImageUploader() {
    /* const image = require("../../images/white-bg.webp"); */

    const uploadHandler = (e) => {
      const url = "http://localhost:8000/api/add-temp";
      /* const data = {
        img: e.target.files[0]
      } */

      var data = new FormData()
      data.append('img', e.target.files[0])

      axios
          .post(url, data)
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
              console.log(error);
          });
    }

    return (
        <div className="imageUploader">
            <input type="file" className="image" onChange={ uploadHandler } />
            <div className="upload">
                <h4>Feltöltött kép</h4>
                <div className="uploaded-image">
                    <img
                        src=""
                        alt=""
                        onError={(event) =>
                            (event.target.style.display = "none")
                        }
                    />
                    <span className="removeImageBtn">
                        <img src={remove} alt="torles" />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ImageUploader;

import React from "react";
import "./firstSale.css";
import Button from "../button/Button";
import counterpart from "../../images/hasonmas_50.png";

export default function FirstSale() {
  return (
    <div className="firstSale saleItem">
        <div className="firstSaleBox saleBox">
            <p>
                Próbáljátok ki <span>féláron</span> Szeged újdonsült okos szabadulószobáját!
            </p>
            <Button href="" text="Foglalj időpontot most" />
        </div>
        <div className="firstSaleBox saleBox">
            <img src={counterpart} alt="hasonmas" />
        </div>
    </div>
  )
}

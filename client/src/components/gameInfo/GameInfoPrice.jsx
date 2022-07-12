import React from "react";
import "./gameInfoPrice.css";

export default function gameInfoPrice(props) {
    return (
        <section className="gameInfoPrice">
            <table>
                <thead>
                    <tr>
                        <td>
                            Ár:
                        </td>
                    </tr>
                 </thead>
                <tbody>
                    <tr>
                        <td>2 fő:</td>
                        <td className="pinkText">{props.two} Ft</td>
                    </tr>
                    <tr>
                        <td>3 fő:</td>
                        <td className="pinkText">{props.three} Ft</td>
                    </tr>
                    <tr>
                        <td>4 fő:</td>
                        <td className="pinkText">{props.four} Ft</td>
                    </tr>
                    <tr>
                        <td>5 fő:</td>
                        <td className="pinkText">{props.five} Ft</td>
                    </tr>
                    <tr>
                        <td>6 fő:</td>
                        <td className="pinkText">{props.six} Ft</td>
                    </tr>
                </tbody>
            </table> 
        </section>
    )
}


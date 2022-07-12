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
                        <td className="pinkText">6.000,- Ft</td>
                    </tr>
                    <tr>
                        <td>3 fő:</td>
                        <td className="pinkText">8.000,- Ft</td>
                    </tr>
                    <tr>
                        <td>4 fő:</td>
                        <td className="pinkText">10.000,- Ft</td>
                    </tr>
                    <tr>
                        <td>5 fő:</td>
                        <td className="pinkText">12.000,- Ft</td>
                    </tr>
                    <tr>
                        <td>6 fő:</td>
                        <td className="pinkText">13.000,- Ft</td>
                    </tr>
                </tbody>
            </table> 
        </section>
    )
}
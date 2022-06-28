import "./gameInfoPrice.css";

export default function gameInfoPrice() {
    return (
        <section className="gameInfoPrice">
            <table>
                <tr>
                    <td>Ár:</td>
                </tr>
                <div className="priceHighlight"></div>
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
            </table> 
        </section>
    )
}
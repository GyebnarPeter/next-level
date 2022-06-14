import Title from "../title/Title";
import FirstSale from "./FirstSale";
import "./sale.css";
import Vote from "./Vote";

export default function Sale() {
  return (
    <div className="sale">
        <Title name="Aktuális akciók" />
        <div className="container">
          <FirstSale />
          <Vote />
        </div>
    </div>
  )
}

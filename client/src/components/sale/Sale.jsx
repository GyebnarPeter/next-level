import Title from "../title/Title";
import FirstSale from "./FirstSale";
import "./sale.css";

export default function Sale() {
  return (
    <div className="sale">
        <Title name="Aktuális akciók" />
        <FirstSale />
    </div>
  )
}

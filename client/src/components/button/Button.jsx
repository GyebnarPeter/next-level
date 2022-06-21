import './button.css';
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <Link to={ props.href }  className="button link">
      { props.text }
    </Link>
  )
}

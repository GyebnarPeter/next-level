import './button.css';

export default function Button(props) {
  return (
    <a href={props.href} className="button link">
        {props.text}
    </a>
  )
}

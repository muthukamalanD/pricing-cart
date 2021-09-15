import "./styles.css";

export default function Li({ check, text }) {
  return (
    <>
      <li className={check ? "" : "text-muted"}>
        <span className="fa-li">
          <i className={check ? "fas fa-check" : "fas fa-times"}></i>
        </span>
        {text}
      </li>
    </>
  );
}

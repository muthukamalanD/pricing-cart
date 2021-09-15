import Li from "./Li";

export default function Card3() {
  const data = [
    {
      check: true,
      text: "150GB Storage"
    },
    {
      check: true,
      text: "Unlimited Public Projects"
    },
    {
      check: true,
      text: "Community Access"
    },
    {
      check: true,
      text: "Unlimited Private Projects"
    },
    {
      check: true,
      text: "Dedicated Phone Support"
    }
  ];
  return (
    <>
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">
          Pro
        </h5>
        <h6 className="card-price text-center">
          $49<span className="period">/month</span>
        </h6>
        <hr />
        <ul className="fa-ul">
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            <strong>Unlimited Users</strong>
          </li>
          {data.map((data, index) => (
            <Li key={index} check={data.check} text={data.text} />
          ))}

          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            <strong>Unlimited</strong> Free Subdomains
          </li>
          <Li check={true} text={" Monthly Status Reports"} />
        </ul>
        <button className="btn btn-block btn-primary text-uppercase">
          Button
        </button>
      </div>
    </>
  );
}

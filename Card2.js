import Li from "./Li";

export default function Card2() {
  const data = [
    {
      check: true,
      text: "50GB Storage"
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
    },
    {
      check: true,
      text: "Free Subdomain"
    },
    {
      check: false,
      text: "Monthly Status Reports"
    }
  ];
  return (
    <>
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">
          Plus
        </h5>
        <h6 className="card-price text-center">
          $9<span className="period">/month</span>
        </h6>
        <hr />
        <ul className="fa-ul">
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            <strong>5 Users</strong>
          </li>
          {data.map((data, index) => (
            <Li key={index} check={data.check} text={data.text} />
          ))}
        </ul>
        <button className="btn btn-block btn-primary text-uppercase">
          Button
        </button>
      </div>
    </>
  );
}

import Li from "./Li";

export default function Card1() {
  const data = [
    {
      check: true,
      text: "Single User"
    },
    {
      check: true,
      text: "5GB Storage"
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
      check: false,
      text: "Unlimited Private Projects"
    },
    {
      check: false,
      text: "Dedicated Phone Support"
    },
    {
      check: false,
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
          Free
        </h5>
        <h6 className="card-price text-center">
          $0<span className="period">/month</span>
        </h6>
        <hr />
        <ul className="fa-ul">
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

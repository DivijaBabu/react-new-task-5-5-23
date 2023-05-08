import rightarrow from "../../assest/rightarrowsecondary.png";

export default function Digitaltransformation() {
  return (
    <div>
      <div className="bodycontainer1">
        <h1>Digital transformation Services</h1>
        <p>
          Harness technology. Enhance agility and data-driven decision-making.
          We engineer and build agile, future-ready enterprises.
        </p>
        <button className="secondarybutton">
          <p>Secondary Button</p>
          <img src={rightarrow} alt="arrow" height="20px" />
        </button>
      </div>
    </div>
  );
}

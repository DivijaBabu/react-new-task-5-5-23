import connect from "../../assest/connectimage.png";
import rightarrow from "../../assest/rightarrowsecondary.png";

export default function ConnectWithUs() {
  return (
    <div>
      <div className="bodycontainer5">
        <div>
          <img src={connect} alt="connectimage" height="550px" />
        </div>
        <div className="connecttext">
          <h1>Connect with us</h1>
          <p>
            Learn how UST can accelerate your digital transformation journey.
          </p>
          <button>
            <p>Meet an expert</p>
            <img src={rightarrow} alt="arrow" height="20px" width="25px" />
          </button>
        </div>
      </div>
    </div>
  );
}

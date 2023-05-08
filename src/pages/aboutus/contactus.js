import greenarrow from "../../assest/greenarrow.png";
import logo from "../../assest/ust.png";
import linkedin from "../../assest/LinkedIn.png";
import instagram from "../../assest/Instagram.png";
import facebook from "../../assest/Facebook.png";
import twitter from "../../assest/Twitter.png";
import youtube from "../../assest/Youtube.png";

export default function ContactUs() {
  return (
    <div>
      <div className="bodycontainer6">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="contactcontainer">
          <div className="signupcontainer">
            <div className="textsignup">
              <p>Stay in the know</p>
              <p>
                Sign up to hear more about what we're thinking and where you can
                find us.
              </p>
            </div>
            <div className="signupbutton">
              <button>
                <p>Sign up</p>
                <img src={greenarrow} alt="greenarrow" />
              </button>
            </div>
            <div className="socialmedia">
              <img src={linkedin} alt="linkedin" />
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={youtube} alt="youtube" />
            </div>
          </div>
          <div className="wholecontainer">
            <div className="details">
              <div>
                <p>Our thinking</p>
                <p>Join the team</p>
                <p>Our approach</p>
                <p>social commitment</p>
              </div>
              <div>
                <p>About us</p>
                <p>How can we help?</p>
                <p>FInd your next opportunities</p>
                <p>Subscribe</p>
              </div>
              <div>
                <p>Privacy policy</p>
                <p>Our collaboration space</p>
                <p>Acknowledgement</p>
              </div>
            </div>
            <div>
              We use cookies to provide you with the best experience of this
              website. To accept cookies continue browsing as normal or read how
              to decline them in our <u>cookie policy</u>. Please also see our{" "}
              <u>privacy policy.</u>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

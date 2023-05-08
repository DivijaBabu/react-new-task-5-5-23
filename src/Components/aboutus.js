import rightarrow from "../assest/rightarrowsecondary.png";
import bigline from "../assest/bigLine.png";
import discussion from "../assest/disscussionimge.png";
import connect from "../assest/connectimage.png";

// import "bootstrap/dist/css/bootstrap.css";
export default function AboutUs() {
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
      <div className="bodycontainer2">
        <h4>Overview</h4>
        <div className="overviewcontainer">
          <p className="organizationpara">
            Organizations that wish to be adaptive and future-ready must be
            digitally powered, a reason why they pursue digital business
            transformation yet struggle to advance the same.
          </p>
          <img src={bigline} alt="arrow" height="20px" />
          <p className="ustpara">
            UST's digital transformation strategy blends human expertise with
            technical capabilities to kick business transformation for various
            companies into gear-and keep the momentum going. Our strategy
            focuses on end-to-end transformations and ways of working at scale.
            We will help you create a culture that embraces innovation, change,
            continual learning and improvement.
          </p>
        </div>
      </div>
      <div className="bodycontainer3">
        <div className="internalconatiner">
          <div className="headpart">
            <h1>Areas of expertise</h1>
            <p>
              UST digital transformation solutions are focused on business
              outcomes and delivering value.
            </p>
          </div>
          <div className="carosualcontainer">
            <div className="row">
              <div className="col-3 card1">
                <h1>Solutions</h1>
                <div className="cardinterior">
                  <div>
                    <p>#Expertise - 34</p>
                    <p>Projects - 12</p>
                  </div>
                  <div className="button">
                    <p>Learn more</p>
                    <img src={rightarrow} alt="arrow" height="20px" />
                  </div>
                </div>
              </div>
              <div className="col-3 card2">
                <h1>Figma</h1>
                <div className="cardinterior">
                  <div>
                    <p>#Expertise - 34</p>
                    <p>Projects - 12</p>
                  </div>
                  <div className="button">
                    <p>Learn more</p>
                    <img src={rightarrow} alt="arrow" height="20px" />
                  </div>
                </div>
              </div>
              <div className="col-3 card3">
                <h1>Agile Transformation</h1>
                <div className="cardinterior">
                  <div>
                    <p>#Expertise - 34</p>
                    <p>Projects - 12</p>
                  </div>
                  <div className="button">
                    <p>Learn more</p>
                    <img src={rightarrow} alt="arrow" height="20px" />
                  </div>
                </div>
              </div>
              <div className="col-3 card4">
                <h1>Future-ready Technologies</h1>
                <div className="cardinterior">
                  <div>
                    <p>#Expertise - 34</p>
                    <p>Projects - 12</p>
                  </div>
                  <div className="button">
                    <p>Learn more</p>
                    <img src={rightarrow} alt="arrow" height="20px" />
                  </div>
                </div>
              </div>
              <div className="col-3 card5">
                <h1>Automation</h1>
                <div className="cardinterior">
                  <div>
                    <p>#Expertise - 34</p>
                    <p>Projects - 12</p>
                  </div>
                  <div className="button">
                    <p>Learn more</p>
                    <img src={rightarrow} alt="arrow" height="20px" />
                  </div>
                </div>
              </div>
              <div className="col-3 card6">
                <h1>Digital Services</h1>
                <div className="cardinterior">
                  <div>
                    <p>#Expertise - 34</p>
                    <p>Projects - 12</p>
                  </div>
                  <div className="button">
                    <p>Learn more</p>
                    <img src={rightarrow} alt="arrow" height="20px" />
                  </div>
                </div>
              </div>
              <div className="col-3 card7">
                <h1>Cybersecurity</h1>
                <div className="cardinterior">
                  <div>
                    <p>#Expertise - 34</p>
                    <p>Projects - 12</p>
                  </div>
                  <div className="button">
                    <p>Learn more</p>
                    <img src={rightarrow} alt="arrow" height="20px" />
                  </div>
                </div>
              </div>
              <div className="col-3 card8">
                <h1>Application Modernization</h1>
                <div className="cardinterior">
                  <div>
                    <p>#Expertise - 34</p>
                    <p>Projects - 12</p>
                  </div>
                  <div className="button">
                    <p>Learn more</p>
                    <img src={rightarrow} alt="arrow" height="20px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bodycontainer4">
        <div>
          <img src={discussion} alt="discussionicon" />
        </div>
        <div className="approachtext">
          <h1>Our approach</h1>
          <p>
            Your journey to <b>digital business transformation</b> is our
            journey. To help get you there, we move fast. Ask the tough
            questions. And build momentum from day one. Each transformation
            project begins with understanding your <b>business model</b>,
            assessing where you stand in your transformation journey, and
            providing a clear strategy for incorporating{" "}
            <b>modern technologies.</b>
          </p>
        </div>
      </div>
      <div className="bodycontainer5">
        <div>
          <img src={connect} alt="connectimage" />
        </div>
        <div className="connecttext">
          <h1>Connect with us</h1>
          <p>
            Learn how UST can accelerate your digital transformation journey.
          </p>
          <button>
            <p>Meet an expert</p>
            <img src={rightarrow} alt="arrow" height="20px" />
          </button>
        </div>
      </div>
    </div>
  );
}

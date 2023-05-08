import bigline from "../../assest/bigLine.png";
export default function OverView() {
  return (
    <div>
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
    </div>
  );
}

import "./style.css";
import heroimg from "../../assets/heroimg.png";
import amazon from "../../assets/companylogos/amazon.png";
import dribble from "../../assets/companylogos/dribble.png";
import hubspot from "../../assets/companylogos/hubspot.png";
import netflix from "../../assets/companylogos/netflix.png";
import zoom from "../../assets/companylogos/zoom.png";
import notion from "../../assets/companylogos/notion.png";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__text">
          <h1 className="hero__h1">
            Navigating The Digital Landscape for Success
          </h1>
          <p className="hero__p">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="btn">Book a Consultation</button>
        </div>
        <div className="hero__img">
          <img className="img__hero" src={heroimg} alt="heroimg"></img>
        </div>
      </div>

      <div className="hero__mobile">
        <div className="hero__text">
          <h1 className="hero__h1">
            Navigating The Digital Landscape for Success
          </h1>
          <div className="hero__img">
          <img className="img__hero" src={heroimg} alt="heroimg"></img>
        </div>
          <p className="hero__p">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="btn">Book a Consultation</button>
        </div>
      </div>
      
      <div className="image__container">
        <img className="img" src={amazon} alt="amazon"></img>
        <img className="img" src={dribble} alt="dribble"></img>
        <img className="img" src={hubspot} alt="hubspot"></img>
        <img className="img" src={notion} alt="notion"></img>
        <img className="img" src={netflix} alt="netflix"></img>
        <img className="img" src={zoom} alt="zoom"></img>
      </div>
    </>
  );
};
export default Hero;

import "./style.css";
import img from "../../assets/servicebtn/icon1.png";
const CaseStudies = () => {
  return (
    <div className="casestudies">
      <div className="casestudy__text">
        <h2 className="casestudy__h2">Case Studies</h2>
        <p className="casestudy__p">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studie
        </p>
      </div>
      <div className="casestudy__container">
        <div className="casestudy__items">
          <div className="casestudy__items__content">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
          </div>

          <div className="casestudy__img">
            <p>Learn more</p>
            <img className="btn-img" src={img} alt="btn"></img>
          </div>
        </div>
        <div className="casestudy__items">
          <div className="casestudy__items__content">
            <p>
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic
            </p>
          </div>

          <div className="casestudy__img">
            <p>Learn more</p>
            <img className="btn__img" src={img} alt="btn"></img>
          </div>
        </div>
        <div className="casestudy__items" style={{ borderRight: "none" }}>
          <div className="casestudy__items__content">
            <p>
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
          </div>

          <div className="casestudy__img">
            <p>Learn more</p>
            <img className="btn__img" src={img} alt="btn"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;

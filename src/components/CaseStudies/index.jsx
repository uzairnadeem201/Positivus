import "./style.css";
import img from "../../assets/servicebtn/icon1.png";
const CaseStudies = () => {
  const cases = [
    {
      content: `For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales. `,
    },
    {
      content: `For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic`,
    },
    {
      content: `For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.`,
    },
  ];
  return (
    <div className="casestudies">
      <div className="casestudy__text">
        <h2 className="casestudy__h2">Case Studies</h2>
        <p className="casestudy__p">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="casestudy__container">
        {cases.map((caseItem,index) => (
          <div
            className="casestudy__items"
            style={{ borderRight: index === cases.length-1 ? "none" : '' }}
          >
            <div className="casestudy__items__content">
              <p>{caseItem.content}</p>
            </div>

            <div className="casestudy__img">
              <p>Learn more</p>
              <img className="btn__img" src={img} alt="btn" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;

import "./style.css";
import Card from "../ServiceCard";
import card1 from "../../assets/cardlogos/card1.png";
import card2 from "../../assets/cardlogos/card2.png";
import card3 from "../../assets/cardlogos/card3.png";
import card4 from "../../assets/cardlogos/card4.png";
import card5 from "../../assets/cardlogos/card5.png";
import card6 from "../../assets/cardlogos/card6.png";
import btn from "../../assets/servicebtn/icon.png";
import btn1 from "../../assets/servicebtn/icon1.png";
import servicebanner from "../../assets/servicebtn/servicebanner.png";
const Services = () => {
  const cards = [
    {
      heading: "Search engine",
      heading2:"optimization",
      img: card1,
      backgroundColor: "#F3F3F3",
      btnColor: "#191A23",
      btn: btn1,
      headingColor: "#B9FF66",
    },
    {
      heading: "Pay-per-click",
      heading2:"advertising",
      img: card2,
      backgroundColor: "#B9FF66",
      btnColor: "#191A23",
      btn: btn,
      headingColor: "#F3F3F3",
    },
    {
      heading: "Social Media",
      heading2:"Marketing",
      img: card3,
      backgroundColor: "#191A23",
      btnColor: "#B9FF66",
      btn: btn,
      headingColor: "#B9FF66",
    },
    {
      heading: "Email",
      heading2:"Marketing",
      img: card4,
      backgroundColor: "#F3F3F3",
      btnColor: "#191A23",
      btn: btn1,
      headingColor: "#B9FF66",
    },
    {
      heading: "Content",
      heading2:"Creation",
      img: card5,
      backgroundColor: "#B9FF66",
      btnColor: "#191A23",
      btn: btn,
      headingColor: "#F3F3F3",
    },
    {
      heading: "Analytics and",
      heading2: "Tracking",
      img: card6,
      backgroundColor: "#191A23",
      btnColor: "#B9FF66",
      btn: btn,
      headingColor: "#B9FF66",
    },
  ];

  return (
    <div className="services">
      <div className="services__heading">
        <h2 className="services__h2">Services</h2>
        <p className="services__p">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="cards">
        {cards.map((card) => {
          return <Card card={card} />;
        })}
      </div>
      <div className="service__banner">
        <div className="banner__text">
          <h2 className="banner__h2">Let’s make things happen</h2>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="btn">Get Your Free Proposal </button>
        </div>
        <div className="img__container">
          <img
            className="banner__img"
            src={servicebanner}
            alt="servicebanner"
          ></img>
        </div>
      </div>
      <div className="service__banner--mobile">
        <div className="banner__text">
          <h2 className="banner__h2">Let’s make things happen</h2>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="btn">Get Your Free Proposal </button>
        </div>
        </div>
      </div>
  );
};
export default Services;

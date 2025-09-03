import "./style.css";
import card1 from "../../assets/cardlogos/card1.png";
import card2 from "../../assets/cardlogos/card2.png";
import card3 from "../../assets/cardlogos/card3.png";
import card4 from "../../assets/cardlogos/card4.png";
import card5 from "../../assets/cardlogos/card5.png";
import card6 from "../../assets/cardlogos/card6.png";
import btn from "../../assets/servicebtn/icon.png";

const ServiceCard = ({card}) => {
    
  return (
    <div className="card" style={{backgroundColor:card.backgroundColor}}>
      <div className="card__text">
        <div>
          <h3 className="card__text-h3" style={{backgroundColor:card.headingColor}}>{card.heading}</h3>
          <h3 className="card__text-h3" style={{backgroundColor:card.headingColor}}>{card.heading2}</h3>
        </div>

        <div className="card__text-btn">
          <img className='btn__img' src={card.btn} alt="arrow-btn"></img>
          <p className="card__p"style={{color:card.btnColor}}>Learn More</p>
        </div>
      </div>
      <div className="card__img">
        <img className="car__img" src={card.img} alt="technology"></img>
      </div>
    </div>
  );
};
export default ServiceCard;

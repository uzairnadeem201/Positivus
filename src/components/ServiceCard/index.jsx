import "./style.css";
import card1 from "../../assets/cardlogos/card1.png";
import btn from "../../assets/servicebtn/icon.png";

const ServiceCard = () => {
  return (
    <div className="card">
      <div className="card-text">
        <div>
          <h3 className="card-text-h3">Search Engine</h3>
          <h3 className="card-text-h3">Optimization</h3>
        </div>

        <div className="card-text-btn">
          <img className='btn-img' src={btn} alt="arrow-btn"></img>
          <p className="card-p">Learn More</p>
        </div>
      </div>
      <div className="card-img">
        <img className="car-img" src={card1} alt="technology"></img>
      </div>
    </div>
  );
};
export default ServiceCard;

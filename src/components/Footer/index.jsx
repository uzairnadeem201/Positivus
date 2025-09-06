import "./style.css";
import ftricon from "../../assets/ftricon.png";
import fb from "../../assets/socialicons/fb.png";
import x from "../../assets/socialicons/x.png";
import linkedin from "../../assets/socialicons/linkedin.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__heading">
          <img src={ftricon} alt="image"></img>
          <div className="footer__items">
            <h6 className="header__text">About us</h6>
            <h6 className="header__text">Services</h6>
            <h6 className="header__text"> Use Cases</h6>
            <h6 className="header__text">Pricing</h6>
            <h6 className="header__text">Blog</h6>
          </div>
          <div className="socials">
            <img src={fb} alt="image"></img>
            <img src={x} alt="image"></img>
            <img src={linkedin} alt="image"></img>
          </div>
        </div>
        <div className="footer__body">
          <div className="contact__info">
            <p
              style={{
                backgroundColor: "#b9ff66",
                width: "fit-content",
                borderRadius: "2rem",
                color: "#000000",
                padding: ".25rem",
              }}
            >
              Contact us:
            </p>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address:1234 Main St Moonstone City, Stardust State 12345</p>
          </div>
          <div className="email">
            <div className="email__content">
              <input className="footer__input" placeholder="Email"></input>
              <button className="btn btn--color">Subscribe to news</button>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <p style={{textDecoration: "underline"}}>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;

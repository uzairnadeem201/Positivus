import "./style.css";
import contactus from "../../assets/contactus.png";
const ContactUs= () => {
  
  return (
    <div className="contactus">
      <div className="contact__heading">
        <h2 className="services__h2">Contact Us</h2>
        <p className="contactus__p">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="form">
        <div className="form__content">
            <div className='radiobtn'>
                <input type="radio" id="html" name="fav_language" value="HTML" style={{width:'20px'}}/> 
                <label for="html">Say Hi!</label><br></br>
                <input type="radio" id="html" name="fav_language" value="HTML" style={{width:'20px'}}/> 
            <label for="html">Get a Qoute</label><br></br>
            </div>            
            <div className='input-fields'>
                <p>Name</p>
                <input className="input" placeholder="Name"></input>
                <p>Email</p>
                <input className="input" placeholder="Email"></input>
                <p>Message</p>
                <textarea className="textarea"></textarea>
                
            </div>
            <button className="btn btn--size">Send Message</button>
            
        </div>
        <div className="form-img">
            <img className="contactus-img" src={contactus} alt="contactus"></img>
        </div>
      </div>
      
    </div>
  );
};

export default ContactUs;
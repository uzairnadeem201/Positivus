import './style.css'
import Card from '../ServiceCard'
import servicebanner from '../../assets/servicebtn/servicebanner.png'
const Services = () => {

    return(
        <div className='services'>
            <div className='services-heading'>
                <h2 className='services-h2'>Services</h2>
                <p className='services-p'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
            </div>
            <div className = 'cards'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className="service-banner">
                 <div className="banner-text">
                    <h2>Let’s make things happen</h2>
                    <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <button className='service-btn'>Get Your Free Proposal </button>
                 </div>
                 <div className="img-container">
                    <img className="banner-img" src={servicebanner} alt="servicebanner"></img>
                 </div>
            </div>


        </div>
    );

}
export default Services;
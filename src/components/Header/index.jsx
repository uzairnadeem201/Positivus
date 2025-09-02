import './style.css'
import hdricon from '../../assets/hdricon.png'
import { Menu } from 'lucide-react';

const Header = () =>{
    return(
        <div className="header">
            <img src={hdricon} alt="POSTIVUS" width={220} height={56}></img>
            <div className="header-items">
                <h6 className='header-text'>About us</h6>
                <h6 className='header-text'>Services</h6>
                <h6 className='header-text'> Use Cases</h6>
                <h6 className='header-text'>Pricing</h6>
                <h6 className='header-text'>Blog</h6>
                <div className='requestQoute'>
                    Request a qoute
                </div>
            </div>
            <div className="Menu">
                <Menu/>
            </div>
            
        </div>
    );
}

export default Header;
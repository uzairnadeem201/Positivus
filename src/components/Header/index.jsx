import './style.css'
import hdricon from '../../assets/hdricon.png'
import { Menu } from 'lucide-react';

const Header = () =>{
    return(
        <div className="header">
            <img src={hdricon} alt="POSTIVUS" width={220} height={56}></img>
            <div className="header__items">
                <h6 className='header__text'>About us</h6>
                <h6 className='header__text'>Services</h6>
                <h6 className='header__text'> Use Cases</h6>
                <h6 className='header__text'>Pricing</h6>
                <h6 className='header__text'>Blog</h6>
                <button className='btn-transparent'> Request a qoute</button>

            </div>
            <div className="header__menu">
                <Menu/>
            </div>
            
        </div>
    );
}

export default Header;
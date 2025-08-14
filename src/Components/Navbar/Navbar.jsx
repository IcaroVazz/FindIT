import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo.png';
import IconProfile from './perfil-de-usuario.png'

const Navbar = () => {
    return (
        <div className="Container">
            <div className="Left">
                <h4 className="AboutUs" style={{ fontSize: '20px' }}>About Us</h4>
                <h4 className="Options" style={{ fontSize: '20px' }}>Options</h4>
            </div>

            <div className="Center">
                <img src={Logo} className="img-logo" alt="Logo Navbar" />
            </div>

            <div className="Right">
                <button className="btn btn-outline-dark">
                    My Profile
                    <img src={IconProfile} className="img-profile" alt="Profile Icon" style={{ width: '25px', marginLeft: '10px' }} />
                </button>
            </div>
        </div>
    );
};

export default Navbar;

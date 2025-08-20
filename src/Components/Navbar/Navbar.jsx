import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './FIND IT.png';
import IconRegister from './Registerr.png';
import IconProfile from './perfil-de-usuario.png'
import { useNavigate } from 'react-router-dom';


const Navigate = () => {
    const navigate = useNavigate();
}

const Navbar = () => {
    return (
        <div className="Container">
            <div className="Left">
                <h4 className="AboutUs" style={{ fontSize: '20px', color: '#000099' }}>About Us</h4>
                <h4 className="Options" style={{ fontSize: '20px', color: '#000099' }}>Options</h4>
                <h4 className="Catalog" style={{ fontSize: '20px', color: '#000099' }} onClick={() => window.location.href = '/catalog'}>Catalog</h4>
            </div>

            <div className="Center">
                <img src={Logo} className="img-logo" alt="Logo Navbar"
                    onClick={() => window.location.href = '/'}
                />
            </div>

            <div className="Right">
                <button className="btn btn-outline-primary" onClick={() => window.location.href = '/login'} style={{
                    color: '#000099', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px'
                }}>
                    Login
                    <img src={IconProfile} className="img-profile" alt="Profile Icon" style={{ width: '25px', marginLeft: '10px' }} />
                </button>

                <button className="btn btn-outline-primary" onClick={() => window.location.href = '/login'} style={{
                    color: '#000099', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    Register
                    <img src={IconRegister} className="img-profile" alt="Profile Icon" style={{ width: '25px', marginLeft: '10px' }} />
                </button>
            </div>
        </div>
    );
};

export default Navbar;

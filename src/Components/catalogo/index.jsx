// components/Header.js
import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <i className="fas fa-utensils"></i>
                    <h1>Salvador Restô</h1>
                </div>
                <nav className="nav-menu">
                    <a href="#">Início</a>
                    <a href="#">Restaurantes</a>
                    <a href="#">Sobre</a>
                    <a href="#">Contato</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
import React from 'react';
import '../../assets/css/home_page/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>PUCFLIX</h2>
                <div className="footer-links">
                    <a href="#sobre">Sobre</a>
                    <a href="#contato">Contato</a>
                    <a href="#privacidade">Política de Privacidade</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;

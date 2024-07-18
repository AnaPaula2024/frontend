import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'; 
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-content']}>
                <div className={styles['footer-links']}>
                    <Link to="/ajude-a-walcem">Ajude a Walcem</Link>
                    <Link to="/faq">Perguntas frequentes (FAQ)</Link>
                    <Link to="/suporte">Suporte</Link>
                    <Link to="/trabalhe-conosco">Trabalhe conosco</Link>
                </div>
                <div className={styles['contact-info']}>
                    <h2>Informações de contato:</h2>
                    <p>Endereço: Rua Dr. Antônio Bento, 393 - Santo Amaro, São Paulo - SP, 04750-000</p>
                    <p>Telefone: (11) 3737-3900</p>
                    <p>Email: contato@walcem.com.br</p>
                </div>
                <div className={styles['social-media']}>
                    <h2>Redes sociais</h2>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square"></i></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square"></i></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter-square"></i></a>
                </div>
            </div>
            <div className={styles.newsletter}>
                <form action="#" method="POST" className={styles['newsletter-form']}>
                    <label htmlFor="email">Assine nossa Newsletter:</label>
                    <input type="email" id="email" name="email" placeholder="Seu email" className={styles['newsletter-input']} />
                    <button type="submit" className={styles['newsletter-button']}>Assinar</button>
                </form>
            </div>
            <p className={styles.copyright}>Copyright 2024 WALCEM. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;

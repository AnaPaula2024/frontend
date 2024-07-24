import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from '../assets/css/Footer.module.css'; // Importa o CSS Module

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://sua-api-de-newsletter.com/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                setMessage('Inscrição bem-sucedida! Você receberá nossas atualizações por e-mail.');
                setEmail('');
            } else {
                setMessage('Houve um problema ao se inscrever. Tente novamente.');
            }
        } catch (error) {
            setMessage('Erro ao se inscrever. Por favor, tente novamente.');
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLinks}>
                    <Link to="/about">Sobre a WALCEM</Link>
                    <Link to="/faq">Perguntas frequentes (FAQ)</Link>
                    <Link to="/support">Suporte</Link>
                    <Link to="/terms">Termos e Condições</Link>
                    <Link to="/privacy-policy">Política de privacidade</Link>
                </div>
                <div className={styles.contactInfo}>
                    <h2>Informações de contato</h2>
                    <p>Endereço: Rua Dr. Antônio Bento, 393 - Santo Amaro, São Paulo - SP, 04750-000</p>
                    <p>Telefone: (11) 3737-3900</p>
                    <p>Email: contato@walcem.com.br</p>
                </div>
                <div className={styles.socialMedia}>
                    <h2>Redes sociais</h2>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
            </div>
            <div className={styles.newsletter}>
                <form id="newsletterForm" onSubmit={handleSubmit}>
                    <label htmlFor="email">Assine nossa Newsletter:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Assinar</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </footer>
    );
};

export default Footer;

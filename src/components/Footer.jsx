import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify'; // Importa diretamente de react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Importa o CSS do react-toastify
import styles from '../assets/css/Footer.module.css'; // Importa o CSS Module

const Footer = () => {
    const [email, setEmail] = useState('');

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
                toast.success('Inscrição bem-sucedida! Você receberá nossas atualizações por e-mail.');
                setTimeout(() => {
                    setEmail(''); // Limpa o campo após a notificação de sucesso
                }, 1000); // Tempo para garantir que a notificação foi exibida
            } else {
                toast.error('Houve um problema ao se inscrever. Tente novamente.');
            }
        } catch (error) {
            toast.error('Erro ao se inscrever. Por favor, tente novamente.');
        }
    };

    return (
        <>
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
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className={styles.iconX}>
                            𝕏
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
                </div>
            </footer>
            <div className={styles.copyright}>
                <p>Copyright 2024 WALCEM. Todos os direitos reservados.</p>
            </div>
            {/* Componente para exibir notificações */}
            <ToastContainer />
        </>
    );
};

export default Footer;

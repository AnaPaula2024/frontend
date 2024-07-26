import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/css/Header.module.css'; 
import logo from '../assets/img/Logo Walcem.png'; 

const Header = () => {
    const navigate = useNavigate(); // Função de navegação

    let lastScroll = 0; // Inicializa corretamente

    useEffect(() => {
        const header = document.querySelector('header');
        
        const onScroll = () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                header.classList.remove(styles.headerHidden); // Usa a classe do módulo CSS
                return;
            }

            if (currentScroll > lastScroll) {
                header.classList.add(styles.headerHidden); // Usa a classe do módulo CSS
            } else {
                header.classList.remove(styles.headerHidden); // Usa a classe do módulo CSS
            }
            lastScroll = currentScroll;
        };
        
        window.addEventListener('scroll', onScroll);
        
        // Limpa o event listener quando o componente é desmontado
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []); // Dependências vazias para configurar o evento de scroll apenas uma vez

    return (
        <header className={styles.header}>
            <nav aria-label="Menu principal">
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logo} alt="Logo WALCEM" />
                    </Link>
                </div>
                <ul className={styles.navLinks}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="#coleta">Coleta</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon 
                            icon={faUserCircle} 
                            className={styles.faUserCircle}
                            onClick={() => navigate('/login')} 
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

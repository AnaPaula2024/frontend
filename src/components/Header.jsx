import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/css/Header.module.css'; 
import logo from '../assets/img/Logo Walcem.png'; 
import SearchBar from './SearchBar'; // Importa o componente SearchBar

const Header = () => {
    const [isHidden, setIsHidden] = useState(false);
    const navigate = useNavigate(); // Cria a função de navegação
    let lastScrollTop = 0;

    // Função para lidar com a pesquisa
    const handleSearch = (query) => {
        const searchTerm = query.toLowerCase();
        const posts = document.querySelectorAll('.post');

        posts.forEach(post => {
            const title = post.getAttribute('data-title').toLowerCase();
            if (title.includes(searchTerm)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
            lastScrollTop = scrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={isHidden ? styles.headerHidden : styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link to="/"> {/* Link para a página inicial */}
                        <img src={logo} alt="Logo WALCEM" />
                    </Link>
                </div>
                <ul className={styles.navLinks}>
                    <li>
                        <Link to="/">Home</Link> {/* Link para a página inicial */}
                    </li>
                    <li>
                        <SearchBar onSearch={handleSearch} /> 
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faUserCircle}
                            className={styles.faUserCircle}
                            onClick={() => navigate('/login')} // Redireciona para a página de login
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

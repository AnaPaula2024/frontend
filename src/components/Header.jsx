// components/Header.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/css/Header.module.css'; 
import logo from '../assets/img/Logo Walcem.png'; 
import SearchBar from './SearchBar';

const Header = () => {
    const navigate = useNavigate();
    const [headerClass, setHeaderClass] = useState('');

    useEffect(() => {
        let lastScroll = 0;

        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                setHeaderClass('');
            } else if (currentScroll > lastScroll) {
                setHeaderClass(styles.headerHidden);
            } else {
                setHeaderClass('');
            }
            lastScroll = currentScroll;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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

    return (
        <header className={`${styles.header} ${headerClass} animate__animated animate__fadeIn`}>
            <nav className={styles.nav}>
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
                        <Link to="/blog">Coleta</Link>
                    </li>
                    <li>
                        <SearchBar onSearch={handleSearch} />
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

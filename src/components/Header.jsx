import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/img/Logo Walcem.png';

function Header() {
  return (
    <header className={styles.header}> 
      <nav aria-label="Menu principal">
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Logo WALCEM" />
          </Link>
        </div>
        <ul className={styles['nav-links']}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/coleta">Coleta</Link></li>
          <li><Link to="/privacy"><i className="fa fa-user-circle"></i></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;



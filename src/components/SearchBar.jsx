import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/css/SearchBar.module.css'; // Importa o CSS Module

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const searchFunction = () => {
        onSearch(searchQuery); // Passa a consulta de pesquisa para o componente pai
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                id="search-input"
                className={styles.searchInput}
                placeholder="Pesquisar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={searchFunction} type="button" className={styles.searchButton}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
};

export default SearchBar;

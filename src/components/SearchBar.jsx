import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap'; // Importa os componentes do React Bootstrap
import styles from '../assets/css/SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const searchFunction = async () => {
        if (searchQuery.trim() === '') {
            toast.error('Por favor, insira um termo de pesquisa.');
            return;
        }
        try {
            // Simula a pesquisa. Substitua pelo código real de pesquisa, se necessário.
            await onSearch(searchQuery);

            toast.success('Pesquisa realizada com sucesso!');
            setSearchQuery(''); // Limpa o campo de pesquisa após o sucesso
        } catch (error) {
            toast.error('Houve um problema ao realizar a pesquisa. Tente novamente.');
        }
    };

    return (
        <>
            <InputGroup className={styles.searchBar}>
                <FormControl
                    type="text"
                    placeholder="Pesquisar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchInput}
                />
                <Button onClick={searchFunction} className={styles.searchButton} variant="outline-secondary">
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
            </InputGroup>
            {/* Componente para exibir notificações */}
            <ToastContainer />
        </>
    );
};

export default SearchBar;

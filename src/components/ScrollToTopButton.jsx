import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/css/ScrollToTopButton.module.css';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={styles.scrollToTop}>
            {isVisible && (
                <Button onClick={scrollToTop} className={styles.scrollButton} variant="primary">
                    <FontAwesomeIcon icon={faArrowUp} />
                </Button>
            )}
        </div>
    );
};

export default ScrollToTopButton;

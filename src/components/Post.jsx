
import React from 'react';
import styles from '../assets/css/Post.module.css'; 

const Post = ({ imgSrc, title, description, link }) => (
    <div className={styles.post}>
        <img src={imgSrc} alt={title} /> {/* Usando a propriedade `imgSrc` */}
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>Leia mais</a>
    </div>
);

export default Post;
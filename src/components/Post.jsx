// src/components/Post.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/css/Post.module.css'; // Certifique-se de que o caminho está correto

const Post = ({ imgSrc, title, description, id }) => (
  <div className={styles.post}>
    <img src={imgSrc} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <Link to={`/post/${id}`} className={styles.readMore}>Leia Mais</Link>
  </div>
);

export default Post;

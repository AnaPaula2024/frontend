// src/components/FeaturedPosts.jsx

import React from 'react';
import Post from './Post';
import styles from '../assets/css/FeaturedPosts.module.css'; 
import image1 from '../assets/img/PNRS.png';
import image2 from '../assets/img/ISO.png';

const FeaturedPosts = ({ posts }) => {
    // Atualizando os dados dos posts para usar imagens importadas
    const updatedPosts = posts.map(post => {
        switch (post.image) {
            case 'PNRS.png':
                return { ...post, imgSrc: image1 };
            case 'ISO.png':
                return { ...post, imgSrc: image2 };
            default:
                return post;
        }
    });

    return (
        <section className={styles.featuredPosts}>
            <h2>Postagens em Destaque</h2>
            <div className={styles.posts}>
                {updatedPosts.map(post => (
                    <Post
                        key={post.title}
                        imgSrc={post.imgSrc}
                        title={post.title}
                        description={post.description}
                        link={post.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default FeaturedPosts;

import React from 'react';
import Post from './Post';
import { categoriesData } from '../data/newsData';
import styles from '../assets/css/Categories.module.css';

const Categories = () => {
    const categoriesToShow = categoriesData.slice(0, 4);

    return (
        <section className={styles.categories}>
            <h2>Categorias</h2>
            <div className={styles.posts}>
                {categoriesToShow.map(post => (
                    <Post
                        key={post.id}
                        imgSrc={post.imgSrc}
                        title={post.title}
                        description={post.description}
                        id={post.id}
                    />
                ))}
            </div>
        </section>
    );
};

export default Categories;

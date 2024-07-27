import React from 'react';
import Post from './Post';
import { postsData } from '../data/newsData'; // Use postsData se os dados de destaque estiverem aqui
import styles from '../assets/css/FeaturedPosts.module.css';

const FeaturedPosts = () => {
  const FeaturedToShow = postsData.slice(0, 2); // Use postsData aqui

  return (
    <section className={styles.featuredPosts}>
      <h2>Postagens em Destaque</h2>
      <div className={styles.posts}>
        {FeaturedToShow.map(post => (
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

export default FeaturedPosts;

import React from 'react';
import { useParams } from 'react-router-dom';
import { postsData } from '../data/newsData';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../assets/css/PostDetail.module.css';

const PostDetail = ({ id }) => {
  const post = postsData.find(post => post.id === id);

  if (!post) {
    return <div className="text-center mt-5">Post não encontrado</div>;
  }

  return (
    <div className="container my-5">
      <div className={`card shadow-lg border-0 rounded ${styles.card}`}>
        <div className="card-body">
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.metaSeparator}>
              <span className="text-muted">{post.author}</span>
              <span className="text-muted mx-2">|</span>
              <span className="text-muted">{post.category}</span>
              <span className="text-muted mx-2">|</span>
              <span className="text-muted">{post.time}</span>
            </div>
          </div>
          <div className="text-center mb-4">
            <img src={post.imgSrc} alt={post.title} className="img-fluid rounded-3 shadow-sm" />
          </div>
          <section className="card-text" dangerouslySetInnerHTML={{ __html: post.content }}></section>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;

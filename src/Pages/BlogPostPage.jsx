import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostDetail from '../components/PostDetail';
import NewsCarousel from '../components/NewsCarousel';
import CommentsSection from '../components/CommentsSection';

const BlogPostPage = () => {
  const { id } = useParams(); // Obtém o id do post da URL

  return (
    <div>
      <Header />
      <main>
        <PostDetail id={id} />
        <NewsCarousel />
        <CommentsSection postId={id} />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;

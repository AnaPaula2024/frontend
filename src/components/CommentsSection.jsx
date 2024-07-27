import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth'; // Hook de autenticação

const CommentsSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { user } = useAuth(); // Obtém o usuário autenticado

  useEffect(() => {
    // Carregar os comentários
    const fetchComments = async () => {
      const response = await axios.get(`/api/comments/${postId}`);
      setComments(response.data);
    };
    fetchComments();
  }, [postId]);

  const handleCommentSubmit = async () => {
    if (!user) return alert('Você precisa estar logado para comentar.');

    try {
      const response = await axios.post(
        '/api/comments',
        { postId, content: newComment },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      setComments([...comments, response.data]);
      setNewComment('');
    } catch (error) {
      console.error('Erro ao enviar o comentário:', error);
    }
  };

  return (
    <section id="comments">
      <div className="comments-container">
        <h2>Comentários</h2>
        {user ? (
          <div className="comment-form">
            <input
              type="text"
              placeholder="Adicione seu comentário"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={handleCommentSubmit}>ENVIAR</button>
          </div>
        ) : (
          <p>Faça login para comentar.</p>
        )}
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment._id} className="comment">
              <img src="img/homemCmt.png" alt={comment.author} />
              <div className="comment-text">
                <h3>{comment.author}</h3>
                <p>{comment.content}</p>
                <span>Publicado a {new Date(comment.createdAt).toLocaleTimeString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;

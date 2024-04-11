import React from 'react';
import { useParams } from 'react-router-dom';
import './blog.css';

const BlogPost = () => {
  const { id } = useParams();

  
  const posts = [
    {
      id: 1,
      title: '5 Effective Study Tips for College Students',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      title: 'How to Manage Your Time Effectively in College',
      content: 'Duis vehicula, enim ut tincidunt laoreet, velit ex commodo...',
    },
    {
      id: 2,
      title: 'How to Manage Your Time Effectively in College',
      content: 'Duis vehicula, enim ut tincidunt laoreet, velit ex commodo...',
    },
    
  ];

  const post = posts.find(post => post.id === parseInt(id));

  return (
    <div className="blog-post">
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </>
      ) : (
        <p>Blog post not found.</p>
      )}
    </div>
  );
};

export default BlogPost;

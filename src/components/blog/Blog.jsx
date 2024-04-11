import React from 'react';
import { Link } from 'react-router-dom';
import './blog.css';
import NavBar from '../navbar/Navbar';

const Blog = () => {
  return (
    <>
    <NavBar/>
    <div className="blog">
      <h1>College Student Blog</h1>
      <div className="blog-posts">
        <div className="blog-post">
          <h2>5 Effective Study Tips for College Students</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo ut quam luctus,
            nec maximus nunc semper. Vivamus congue, dolor a facilisis bibendum, justo sapien bibendum velit,
            et posuere enim tellus sit amet ligula.
          </p>
          <Link to="/blog/1" className="read-more">
            Read More
          </Link>
        </div>
        <div className="blog-post">
          <h2>5 Effective Study Tips for College Students</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo ut quam luctus,
            nec maximus nunc semper. Vivamus congue, dolor a facilisis bibendum, justo sapien bibendum velit,
            et posuere enim tellus sit amet ligula.
          </p>
          <Link to="/blog/1" className="read-more">
            Read More
          </Link>
        </div>
        <div className="blog-post">
          <h2>How to Manage Your Time Effectively in College</h2>
          <p>
            Duis vehicula, enim ut tincidunt laoreet, velit ex commodo ex, nec sollicitudin magna libero sed mi.
            Quisque nec nunc vel sem cursus dictum. Aliquam erat volutpat.
          </p>
          <Link to="/blog/2" className="read-more">
            Read More
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Blog;

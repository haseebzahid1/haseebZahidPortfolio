import React from 'react';
import '../../components/blogs/Blogs.css';
import { blogSection } from "../../portfolio";
import BlogCard from '../blogCard/BlogCard';

const Blogs = () => {
    return (
        <div className='container'>
            <div className="blog-header">
                <h1 className="blog-header-text">{blogSection.title}</h1>
                <p className="subTitle blog-subtitle">{blogSection.subtitle}</p>
            </div>
            <div className='blog-container'>
            {blogSection.blogs.map(blog => {
            return (
              <BlogCard
                blog={{
                 
                  title: blog.title,
                  description: blog.description
                }}
              />
            );
          })}
            </div>
        </div>
    )
}

export default Blogs

import React from 'react'
import '../../components/blogCard/BlogCard.css'

const BlogCard = ({blog}) => {
    return (
        <div className='blog-content'>
            <div className='blog-card'>
            <a className='blog-body' href="#blog">
               <div className='blog-div'>
               <h3 className='blog-title'>{blog.title}</h3>
                <p className='blog-p'>{blog.description}</p>
                <div class="go-corner" >
                    <div class="go-arrow">→</div>
                </div>
               </div>
            </a>
        </div>
        </div>
    )
}

export default BlogCard

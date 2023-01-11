import React from 'react';
import Article from './Article';
import blogData from "../data/blog";


function ArticleList(){

    const blogEach = blogData.posts.map(blog => <Article key={blog.preview} title={blog.title} date={blog.date} preview={blog.preview} />)
    return(
      <main>
        {blogEach}
      </main>
    )
  }

export default ArticleList;
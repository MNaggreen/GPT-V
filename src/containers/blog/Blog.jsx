import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text"> Многое происходит,{/* A lot is happening,  */} <br /> И мы пишем об этом в нашем блоге.{/* We are blogging about it. */}</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Сен 26, 2021" text="GPT-V и открытый искусственный интеллект - это будущее. Давайте рассмотрим, как это происходит?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Сен 26, 2021" text="GPT-V и открытый искусственный интеллект - это будущее. Давайте рассмотрим, как это происходит?" />
        <Article imgUrl={blog03} date="Сен 26, 2021" text="GPT-V и открытый искусственный интеллект - это будущее. Давайте рассмотрим, как это происходит?" />
        <Article imgUrl={blog04} date="Сен 26, 2021" text="GPT-V и открытый искусственный интеллект - это будущее. Давайте рассмотрим, как это происходит?" />
        <Article imgUrl={blog05} date="Сен 26, 2021" text="GPT-V и открытый искусственный интеллект - это будущее. Давайте рассмотрим, как это происходит?" />
      </div>
    </div>
  </div>
);

export default Blog;

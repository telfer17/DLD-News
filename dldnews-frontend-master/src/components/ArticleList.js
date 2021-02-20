import React from 'react';
import ArticleThumb from './ArticleThumb';

const ArticleList = (props) => {

// should definitely re-factor to have one loop instead of the following 5 variable definitions...
  const articles_politics = props.articles.filter(article => article.category.label === "Politics").map(article => {
    return (
      <li key={article.id} className="article-thumb">
        <ArticleThumb articleThumb={article}/>
      </li>
    )
  });

  const articles_science = props.articles.filter(article => article.category.label === "Science").map(article => {
    return (
      <li key={article.id} className="article-thumb">
        <ArticleThumb articleThumb={article}/>
      </li>
    )
  });

  const articles_tech = props.articles.filter(article => article.category.label === "Technology").map(article => {
    return (
      <li key={article.id} className="article-thumb">
        <ArticleThumb articleThumb={article}/>
      </li>
    )
  });

  const articles_business = props.articles.filter(article => article.category.label === "Business").map(article => {
    return (
      <li key={article.id} className="article-thumb">
        <ArticleThumb articleThumb={article}/>
      </li>
    )
  });

  const articles_human = props.articles.filter(article => article.category.label === "Human Interest").map(article => {
    return (
      <li key={article.id} className="article-thumb">
        <ArticleThumb articleThumb={article}/>
      </li>
    )
  });



  return (
    <div className="home-article-sections">

      <div className="politics-label">
      <h3>Politics</h3>
      <ul className="home-politics">
        {articles_politics}
      </ul>
    </div>

    <div className="science-label">
    <h3>Science</h3>
      <ul className="home-science">
        {articles_science}
      </ul>
      </div>

      <div className="technology-label">
      <h3>Technology</h3>
      <ul className="home-technology">
        {articles_tech}
      </ul>
      </div>

      <div className="business-label">
      <h3>Business</h3>
      <ul className="home-business">
        {articles_business}
      </ul>
      </div>

      <div className="human-label">
      <h3>Human Interest</h3>
      <ul className="home-human">
        {articles_human}
      </ul>
      </div>

    </div>
  )

}

export default ArticleList;

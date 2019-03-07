import React from 'react';
import ArticleThumb from './ArticleThumb';


const Favourites = (props) => {

  const articles_faves = props.articles.filter(article => article.bookmarked === true).map(article => {
    return (
      <li key={article.id} className="article-thumb">
        <ArticleThumb articleThumb={article}/>
      </li>
    )
  });

  return (
    <div className="bookmarked-section">
      <h3>To Read: </h3>
      <ul>
        {articles_faves}
      </ul>
    </div>
  )

}

export default Favourites;

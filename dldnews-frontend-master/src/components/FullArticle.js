import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const FullArticle = (props) => {
  if(!props.article){
    return null;
  }

  function handleBookmark(){
  const article = {
    "bookmarked": true
    }
  props.handleBookmarkClick(article);
  }

  function onDelete(){
    props.handleDelete(props.article.id)
  }

  return (
    <div className="FullSingleArticle">
      <h1>{props.article.title}</h1>
      <img src={props.article.media} alt={props.article.title}/>
      <h4>{props.article.author.name}</h4>
      <Link to="/articles/favourites"><img src="https://i.ibb.co/vzG3qnF/bookmark.png" onClick={handleBookmark} id="article-bookmark"/></Link>

      <p>{props.article.summary}</p>
      <p>{props.article.fullText}</p>
      <Link className = "edit-article" to={'/articles/update/' + props.article.id}>
      <button>EDIT ARTICLE</button>
      </Link>
      <button onClick={onDelete}>DELETE ARTICLE</button>
    </div>
  )

}

export default FullArticle;

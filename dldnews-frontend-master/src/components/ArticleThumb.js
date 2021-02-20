import React from 'react';
import {Link} from 'react-router-dom';

const ArticleThumb = (props) => {

  const {title, media, summary, id} = props.articleThumb;
  // console.log(id);

// assumes average adult reading speed is 250 words per minute
  function calcReadTime(){
    const text = props.articleThumb.fullText;
    const wordCount = text.split(' ').length;
    const readTime = Math.ceil(wordCount / 250);
    return readTime;
  }


  return (
    <div class-name="article-thumb">
      <Link to={'/articles/' + id}
      className='headline'><img src={media} alt={title}/>
      <h4>{title}</h4></Link>
      <p>{summary}</p>
       <h5><img src="https://i.ibb.co/nPWqWc9/timer.png" alt="timer icon" id="timer"/>{calcReadTime()} min read </h5>

    </div>
  )

}

export default ArticleThumb;

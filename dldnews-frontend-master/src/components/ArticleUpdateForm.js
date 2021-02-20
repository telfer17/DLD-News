import React from 'react';

const ArticleUpdateForm = (props) => {
  if(!props.article) return null;

  function handleSubmit(event){
    event.preventDefault();
    const article = {
      "id": props.article.id,
      "title": event.target.title.value,
      "summary": event.target.summary.value,
      "fullText": event.target.fullText.value,
      "category": event.target.category.value,
      "author": event.target.author.value,
      "date": event.target.date.value,
      "media": event.target.media.value
    }
    props.handleArticleUpdate(article);
  }

  const categoryOptions = props.categories.map((category) => {
    return <option key={category.id} value={category._links.self.href}>{category.label}</option>
  })

  return (
    <form onSubmit={handleSubmit} className="form">
    <h2>TITLE</h2>
    <input type="text" placeholder="Title" name="title" defaultValue={props.article.title} className="title" />
    <h2>ARTICLE SUMMARY</h2>
    <textarea rows="2" cols="20" wrap="hard" placeholder="Summary" name="summary"  defaultValue={props.article.summary} className="summary" />
    <h2>ARTICLE TEXT</h2>
    <textarea rows="2" cols="20" wrap="hard" placeholder="Article Text" name="fullText" defaultValue={props.article.fullText} className="full-text" />
    <h2>CATEGORY</h2>
    <select name="category" className="category" >
      {categoryOptions}
    </select>
    <h2>AUTHOR</h2>
    <input type="text" placeholder="Author" name="author" defaultValue={props.article.author.name} className="author" />
    <h2>PUBLICATION DATE</h2>
    <input type="date" placeholder="Date" name="date" defaultValue={props.article.date} className="date" />
    <h2>MEDIA</h2>
    <input type="text" placeholder="Media" name="media" defaultValue={props.article.media} className="media" />

    <button type="submit">SAVE</button>
    </form>
  )
}

export default ArticleUpdateForm;

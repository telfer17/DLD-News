import React, {Component} from 'react';
import Request from '../helpers/Request';

import ArticleUpdateForm from '../components/ArticleUpdateForm';

class UpdateArticleFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: [],
      article: null
    }
    this.getCategories = this.getCategories.bind(this);
    this.getArticle = this.getArticle.bind(this);
    this.handleArticleUpdate = this.handleArticleUpdate.bind(this);
  }

  componentDidMount(){
    this.getCategories();
    this.getArticle();
  }

  getCategories(){
    const request = new Request();
    request.get('/api/categories').then(data => {
      this.setState({categories: data._embedded.categories})
    })
  }

  getArticle(){
    let request = new Request();
    const url = '/api/articles/' + this.props.id + '?projection=embedForArticle';
    request.get(url).then(data => {
      this.setState({article: data})
    })
  }

  handleArticleUpdate(article){
    const url = '/api/articles/' + article.id;
    let request = new Request();
    request.put(url, article).then(data => {
      window.location = '/articles'
    })
  }

  render(){
    return (
      <ArticleUpdateForm
        categories={this.state.categories}
        handleArticleUpdate={this.handleArticleUpdate}
        article={this.state.article}
      />
    )
  }


}

export default UpdateArticleFormContainer;

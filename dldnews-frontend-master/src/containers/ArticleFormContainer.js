import React, {Component} from 'react';
import Request from '../helpers/Request';
import ArticleForm from '../components/ArticleForm';

class ArticleFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: [],
      authors: []
    }
    this.handleArticlePost = this.handleArticlePost.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/categories').then(data => {
      this.setState({categories: data._embedded.categories});
    })
    request.get('/api/authors').then(data => {
      this.setState({authors: data._embedded.authors});
    })
  }

  handleArticlePost(article){
    const request = new Request();
    request.post('/api/articles', article).then(() => {
      window.location = '/articles';
    })
  }

  render(){
    return (
      <ArticleForm categories={this.state.categories} authors={this.state.authors} handleArticlePost={this.handleArticlePost}/>
    )
  }

}

export default ArticleFormContainer;

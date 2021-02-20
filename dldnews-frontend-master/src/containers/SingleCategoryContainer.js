import React, {Component} from 'react';
import Request from '../helpers/Request';
import SingleCategory from '../components/SingleCategory';

class SingleCategoryContainer extends Component {
  constructor(props){
    super(props);
    this.state = {articles: []}
  }


  componentDidMount(){
    let request = new Request();
    const url = '/api/categories/' + this.props.id;
    request.get(url).then(data => {
      this.setState({articles: data._embedded.articles})
    })
  }

  componentDidUpdate(prevProps){
    if(this.props.id !== prevProps.id){
        let request = new Request();
        const url = '/api/categories/' + this.props.id;
        request.get(url).then(data => {
            this.setState({articles: data._embedded.articles})
        })
    }
  }

  render(){
    return (
      <>
        <SingleCategory articles={this.state.articles}/>
      </>
    )
  }

}

export default SingleCategoryContainer;

import React, {Component} from 'react';
import Request from '../helpers/Request';
import Favourites from '../components/Favourites';

class FaveContainer extends Component {
  constructor(props){
    super(props);
    this.state = {articles: []}
  }

  // get all articles to send to fave comonent
  componentDidMount(){
    let request = new Request();
    request.get('/api/articles?size=50').then(data => {
      this.setState({articles: data._embedded.articles})
    })
  }

  render(){
    return (
      <>
      <Favourites articles={this.state.articles}/>
    </>
  )
}

}

export default FaveContainer;

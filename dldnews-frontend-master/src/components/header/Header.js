import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {

  state = {
    headerShow: false
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if(window.scrollY > 0){
      this.setState({
        headerShow: true
      })
    } else {
      this.setState({
        headerShow: false
      })
    }
  }

  render(){
    return (
      <AppBar
        position = "fixed"
        style = {{
          backgroundColor: this.state.headerShow ? 'black' : 'black',
          boxShadow: 'none',
        }}
      >


      <Toolbar>
        <div id="header-id">
              <Link to="/articles/"><img src="https://svgshare.com/i/9sY.svg" id="header-id" alt="header logo" /></Link>
        </div>

        <ul>
        <li className="navLink">
          <Link to="/articles/favourites"><img src="https://i.ibb.co/3Rhj76y/book.png" id="bookmark"/></Link>
        </li>
        <li className="navLink">
          <Link to="/articles/new"><img src="https://i.ibb.co/0mYsY0d/admin.png" id="admin" alt="admin area" /></Link>
        </li>
        </ul>
      </Toolbar>
      </AppBar>
    );
  }


}

export default Header;

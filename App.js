import React, { Component } from 'react';
import './App.css';
import './gallery.css';

import './home.css';
import Home from './Home.js';
import Gallery from './Gallery.js';
import Contact from './Contact.js';
import Buttons from './Buttons.js';
import {StyleRoot} from 'radium';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      componentToDisplay:'Home'
    }
  }
  
  handleGalleryButtonClick=(e)=>{
    this.setState({componentToDisplay:'Gallery'});
  }
  handleContactButtonClick=(e)=>{
    this.setState({componentToDisplay:'Contact'});
  }
  handleHomeButtonClick=(e)=>{
    this.setState({componentToDisplay:'Home'});
  }
  render() {

    if(this.state.componentToDisplay === 'Gallery'){
      return (<div> <Gallery/> <Buttons toHome={this.handleHomeButtonClick} toContact={this.handleContactButtonClick}/> </div>);
    }else if(this.state.componentToDisplay === 'Contact'){
      return (<div> <Contact/> <Buttons toHome={this.handleHomeButtonClick} toGallery={this.handleGalleryButtonClick}/> </div>);
    }
    else if(this.state.componentToDisplay === 'Home'){
      return (<div> <Home/> <Buttons toGallery={this.handleGalleryButtonClick} toContact={this.handleContactButtonClick}/> </div>);
    }
  }
}

export default App;

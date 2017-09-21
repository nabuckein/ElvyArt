import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render() {

    return (<div className="App">
          <div className="mainTitleAndDescription">
            <h2 id="mainTitle">ElvyArt Designs</h2>
            <p className="mainDescription" id="mainDescriptionText">My name is Elvira Romano and I am an artist from Argentina, currently living in South Carolina. Lately I've been into resin finished paintings and elements, such as clocks and rotary table center pieces. I am always welcome to suggestions, as well as requests and comments. If you'd like to contact me please to to the "CONTACT" button/tab choose a preferred method.</p>
          </div>
          <div className="buttonsDiv">
            <button className="buttons" onClick={this.props.handleGalleryButtonClick} >GALLERY</button>
            <button className="buttons" onClick={this.props.handleContactButtonClick} >CONTACT</button>
            <button className="buttons">BIOGRAPHY</button>
            <button className="buttons">COMMENTS</button>
            <button className="buttons">RANDOM STUFF</button>
            <button className="buttons" onClick={this.props.handleHomeButtonClick}>HOME</button>
          </div>
        </div>);
  }
}

export default Home;

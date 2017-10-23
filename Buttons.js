import React, { Component } from 'react';
import Radium from 'radium';
import {StyleRoot} from 'radium';



class Buttons extends Component {

  handleTouchStart=(e)=>{
    e.target.style.background = 'purple';
    e.target.style.color = 'white';
  }

  handleTouchEnd=(e)=>{
    e.target.style.background = 'white';
    e.target.style.color = 'black';
  }

  render() {

    return (
      <div>
        <StyleRoot style={divStyle}>
          <div className="Buttons" style={styles.Buttons}>
            <div className="buttonsDiv" style={styles.buttonsDiv}>
                <button onMouseEnter={this.handleTouchStart} onMouseLeave={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd} onTouchCancel={this.handleTouchEnd} key="galleryButton" style={styles.buttons} className="buttons" onClick={this.props.toGallery} >GALLERY</button>
                <button onMouseEnter={this.handleTouchStart} onMouseLeave={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd} onTouchCancel={this.handleTouchEnd} key="contactButton" style={styles.buttons} className="buttons" onClick={this.props.toContact} >CONTACT</button>
                
                <button onMouseEnter={this.handleTouchStart} onMouseLeave={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd} onTouchCancel={this.handleTouchEnd} key="commentsButton" style={styles.buttons} className="buttons">COMMENTS</button>
                
                <button onMouseEnter={this.handleTouchStart} onMouseLeave={this.handleTouchEnd} onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd} onTouchCancel={this.handleTouchEnd} key="homeButton" style={styles.buttons} className="buttons" onClick={this.props.toHome}>HOME</button>
            </div>
          </div>
        </StyleRoot>
      </div>
    );
  }
}

export default Radium(Buttons);

const divStyle = {
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

const styles = {
  Buttons : {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    display: 'flex'

    
  },
  buttonsDiv:{
    
    justifyContent:'center',
    marginLeft:'auto',
    marginRight:'auto'


  },
  buttons:{
    background: 'white',
    border:'none',
    fontFamily: 'Khand',
    marginLeft:5,   
    
    '@media (min-width:1000px)':{
      fontSize:26
    },
    '@media (min-width:850px) and (max-width:1000px)':{
      fontSize:18
    },
    '@media (min-width:450px) and (max-width:850px)':{
      fontSize:16
    },
    '@media (min-width:0px) and (max-width:450px)':{
      fontSize:14
    }
  }
}

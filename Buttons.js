import React, { Component } from 'react';
import Radium from 'radium';
import {StyleRoot} from 'radium';



class Buttons extends Component {
  render() {

    return (
      <div>
      <StyleRoot>
      <div className="Buttons" style={styles.Buttons}>
        <div className="buttonsDiv" style={styles.buttonsDiv}>
            <button key="galleryButton" style={styles.buttons} className="buttons" onClick={this.props.toGallery} >GALLERY</button>
            <button key="contactButton" style={styles.buttons} className="buttons" onClick={this.props.toContact} >CONTACT</button>
            
            <button key="commentsButton" style={styles.buttons} className="buttons">COMMENTS</button>
            
            <button key="homeButton" style={styles.buttons} className="buttons" onClick={this.props.toHome}>HOME</button>
        </div>
      </div>
      </StyleRoot>
      </div>
    );
  }
}

export default Radium(Buttons);

const styles = {
  Buttons : {
    position: 'absolute',
    bottom: 10,
    width: '100%'
  },
  buttonsDiv:{
    display: 'flex',
    justifyContent: 'center'
  },
  buttons:{
    fontSize: '1.25em',
    background: 'white',
    border:'none',
    fontFamily: 'Khand',
    marginLeft:5,

    ':hover':{
      background:'purple',
      color:'white'
    },

    '@media (min-width:1001px)':{
      fontSize:22
    },
    '@media (max-width:1000px)':{
      fontSize:18
    },
    '@media (max-width:800px)':{
      fontSize:16
    }
  }
}
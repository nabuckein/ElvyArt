import React, { Component } from 'react';
import Radium from 'radium';
import {StyleRoot} from 'radium';



class Contact extends Component {
  render() {
    
    return (
      <div>
        <StyleRoot>
        <div className="Contact" style={ContactStyles}>
          
          <p className="contactLineText" style={contactLineTextStyle}>Please feel free to contact me via phone or e-mail (usually e-mail works best):</p>
          <p className="contactLineText" style={contactLineTextStyle}>Ph. Number: (630)338-9270</p>
          <p className="contactLineText" style={contactLineTextStyle}>E-mail: elvyarte@gmail.com</p>
          <a className="contactLineText" style={contactLineTextStyle} href="https://www.etsy.com/shop/LolamoraDesigns"> <span style={noUnderline}>Etsy link:</span> https://www.etsy.com/shop/LolamoraDesigns1</a>
          
        </div>
        </StyleRoot>
      </div>
      )

  }
}

export default Radium(Contact);


const ContactStyles ={
  
  textAlign: 'center',
  fontSize: '2em',
  fontFamily: 'Just Another Hand',
  
  animation: 'opacitychange 0.25s',
  
  '@media (min-width:1001px)':{
    paddingTop: '5%',
    height:'80%'
  },
  '@media(min-width:850px) and (max-width:1000px)':{
    fontSize:30,
    height:'60%',
    paddingTop: '15%',
  },
  '@media(min-width:450px) and (max-width:850px)':{
    fontSize:24,
    height:'70%',
    paddingTop: '15%',
  },
  '@media(min-width:0px) and (max-width:450px)':{
    fontSize:18,
    height:'80%',
    paddingTop: '25%',
  }
};

const contactLineTextStyle = {
  color:'white'
}
const noUnderline = {
  textDecoration: 'none'
}
import React, { Component } from 'react';




class Contact extends Component {
  render() {
  	
    return (
    	<div className="Contact" style={ContactStyles}>
    		<p className="contactLineText" style={contactLineTextStyle}>Please feel free to contact me via phone or e-mail (usually e-mail works best):</p>
    		<p className="contactLineText" style={contactLineTextStyle}>Ph. Number: (630)338-9270</p>
    		<p className="contactLineText" style={contactLineTextStyle}>E-mail: elvyarte@gmail.com</p>
    		<a className="contactLineText" style={contactLineTextStyle} href="https://www.etsy.com/shop/LolamoraDesigns"> <span style={noUnderline}>Etsy link:</span> https://www.etsy.com/shop/LolamoraDesigns1</a>

    	</div>
    	)

  }
}

export default Contact;


const ContactStyles ={
  paddingTop: '15%',
  textAlign: 'center',
  fontSize: '2em',
  fontFamily: 'Just Another Hand',
  height: '100%',
  animation: 'opacitychange 0.25s'
};

const contactLineTextStyle = {
  color:'white'
}
const noUnderline = {
  textDecoration: 'none'
}
import React, { Component } from 'react';

import Buttons from './Buttons.js';

const ContactStyles ={
	paddingTop: '15%',
	textAlign: 'center',
	fontSize: '2em',
	fontFamily: 'Just Another Hand'
};


class Contact extends Component {
  render() {
  	
    return (
    	<div className="Contact" style={ContactStyles}>
    		<p className="contactLineText">Please feel free to contact me via phone or e-mail (usually e-mail works best):</p>
    		<p className="contactLineText">Ph. Number: (847)212-8933</p>
    		<p className="contactLineText">E-mail: xxxxxxx@hotmail.com</p>
    		<a className="contactLineText" href="https://www.etsy.com/shop/LolamoraDesigns"> https://www.etsy.com/shop/LolamoraDesigns1</a>

    	</div>
    	)

  }
}

export default Contact;

import React, { Component } from 'react';
import Radium from 'radium';
import {StyleRoot} from 'radium';

import './home.css';

class Home extends Component {
  render() {

    return (
    	<div className="Home" style={styles.Home}>
    		<StyleRoot >
          <div className="mainTitleAndDescription" style={styles.mainTitleAndDescription}>
            <h2 id="mainTitle" style={styles.mainTitle}>LolaMora Designs</h2>
            <p className="mainDescription" id="mainDescriptionText" style={styles.mainDescription}>My name is Elvira Romano and I consider myself a contemporary artist. 
            I was born and raised in Argentina, but I currently reside in South Carolina, U.S.A. Ever since my childhood years I've been interested in every aspect of the arts. 
            I have experimented with sculpting, drawing with pencil and charcoal, collages, oil, and acrylics. Once upon a time I was into textiles and I worked on looms as well. 
            Lately I've been doing paintings, incorporating resin mixed with acrylic paint. Art is beautiful, it relaxes your mind and for me art transports me into a world of infinite colors.</p>
          </div>
          </StyleRoot>
        </div>);
  }
}

export default Radium(Home);

const styles = {
	Home:{
		textAlign:'center',
		animation: 'opacitychange 0.25s'
	},
	mainTitleAndDescription:{
		backgroundColor: 'transparent',  
		
		textAlign: 'center',
		width:'100%'
	},
	mainTitle:{
		fontFamily: 'Great Vibes',
  		
  		color: 'white',
  		width:'100%',
  		marginBottom: '10px',
  		'@media(min-width:1001px)': {
  			fontSize:110
  		},  		
		'@media(min-width:850px) and (max-width:1000px)': {
  			fontSize:70		
  		},
  		'@media(min-width:450px) and (max-width:850px)': {
  			fontSize:70
  		},
  		'@media(min-width:0px) and (max-width:450px)': {
  			fontSize:65
  		}
	},
	mainDescription:{
		marginLeft:'auto',
		marginRight:'auto',
		fontFamily: 'Zilla Slab Highlight',
		color: 'white',		
		
		
		'@media(min-width:1001px)': {
  			fontSize:24,
  			marginTop:'5%',
  			width:'90%'
  		},
		'@media(min-width:850px) and (max-width:1000px)': {
  			fontSize:22,
  			width:'75%',
  			marginTop:'10%'
  		},
  		'@media(min-width:450px) and (max-width:850px)': {
  			fontSize:16,
  			width:'90%',
  			marginTop:'10%'
  		},
  		'@media(min-width:0px) and (max-width:450px)': {
  			fontSize:16,
  			marginTop:'15%',
  			width:'90%'  		}
		
	}
}
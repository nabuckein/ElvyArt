import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render() {

    return (
    	<div className="Home" style={styles.Home}>
          <div className="mainTitleAndDescription" style={styles.mainTitleAndDescription}>
            <h2 id="mainTitle" style={styles.mainTitle}>LolaMora Designs</h2>
            <p className="mainDescription" id="mainDescriptionText" style={styles.mainDescription}>My name is Elvira Romano and I consider myself a contemporary artist. 
            I was born and raised in Argentina, but I currently reside in South Carolina, U.S.A. Ever since my childhood years I've been interested in every aspect of the arts. 
            I have experimented with sculpting, drawing with pencil and charcoal, collages, oil, and acrylics. Once upon a time I was into textiles and I worked on looms as well. 
            Lately I've been doing paintings, incorporating resin mixed with acrylic paint. Art is beautiful, it relaxes your mind and for me art transports me into a world of infinite colors.</p>
          </div>
          
        </div>);
  }
}

export default Home;

const styles = {
	Home:{
		textAlign:'center',
		animation: 'opacitychange 0.25s'
	},
	mainTitleAndDescription:{
		backgroundColor: 'transparent',  
		fontSize:'20px',
		textAlign: 'center',
		width:'100%'
	},
	mainTitle:{
		fontFamily: 'Great Vibes',
  		fontSize: '5.25em',
  		color: 'white',
  		width:'100%',
  		marginBottom: '10px'
	},
	mainDescription:{
		marginLeft:'auto',
		marginRight:'auto',
		fontFamily: 'Zilla Slab Highlight',
		color: 'white',
		fontSize: '1.25em',
		marginTop:'5%',
		maxWidth: '850px'
	}
}
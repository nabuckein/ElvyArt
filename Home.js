import React, { Component } from 'react';


class Home extends Component {
  render() {

    return (
    	<div className="Home" style={styles.Home}>
          <div className="mainTitleAndDescription" style={styles.mainTitleAndDescription}>
            <h2 id="mainTitle" style={styles.mainTitle}>ElvyArt Designs</h2>
            <p className="mainDescription" id="mainDescriptionText" style={styles.mainDescription}>My name is Elvira Romano and I am an artist from Argentina, currently living in South Carolina. Lately I've been into resin finished paintings and elements, such as clocks and rotary table center pieces. I am always welcome to suggestions, as well as requests and comments. If you'd like to contact me please to to the "CONTACT" button/tab choose a preferred method.</p>
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
		marginTop:'10%',
		maxWidth: '850px'
	}
}
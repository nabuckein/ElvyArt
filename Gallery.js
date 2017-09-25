import React, { Component } from 'react';


var image1 = require('./images/clock1.png');
var image2 = require('./images/clock2.png');
var image3 = require('./images/clock3.png');

var imagesArr = [image1,image2,image3];
var imageNumber = 0;

class Gallery extends Component {

	  constructor(props){
	    super(props);
	    this.state={

	      	imgToDisplay:imagesArr[imageNumber]
	    }
	  }

	

	toNextImage=(e)=>{
		if(imageNumber<imagesArr.length-1 && imageNumber>=0){
			imageNumber++;
		}else{
			imageNumber=0;
		}
		
		this.setState({imgToDisplay:imagesArr[imageNumber]});
	}
	toPreviousImage=(e)=>{
		if(imageNumber>0){
			imageNumber--;
		}else{
			imageNumber=imagesArr.length-1;
		}
		this.setState({imgToDisplay:imagesArr[imageNumber]});
	}

    render() {
    	console.log(imageNumber);
      return (
        <div className="Gallery" style={GalleryStyles}>
      	    <p className="imageTitle">Red Pointer Clock</p>
      	    <div className="imageAndArrows">
      	    	<i className="fa fa-arrow-circle-left" aria-hidden="true" onClick={this.toNextImage}></i>
        		  <img alt="test1" className="images" src={this.state.imgToDisplay} style={imagesStyle}></img>
        		  <i className="fa fa-arrow-circle-right" aria-hidden="true" onClick={this.toPreviousImage}></i>
        	</div>
       		<p className="imageDescriptionLine1">Diameter: 50cm (19.7")</p>
      	</div>
    );
  }
}

export default Gallery;

const GalleryStyles = {
  marginLeft:'auto',
  marginRight:'auto',
  textAlign:'center',
  borderRadius:'10px',
  fontSize: '2em',
  fontFamily: 'Just Another Hand',
  width:'50%',
  animation: 'opacitychange 0.15s'
}

const imagesStyle = {
	animation: 'opacitychange 2.5s'
}
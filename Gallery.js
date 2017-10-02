import React, { Component } from 'react';


var image1 = require('./images/clock1.png');
var image2 = require('./images/clock2.png');
var image3 = require('./images/clock3.png');
var image4 = require('./images/cuttingBoard4.jpg');
var image5 = require('./images/cuttingBoard5.png');
var image6 = require('./images/cuttingBoard6.png');
var image7 = require('./images/cuttingBoard7.png');

var imagesArr = [image1,image2,image3,image4,image5,image6,image7];
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
      	    
            <div className="linkTitles">
              <p className="linkTitlesText">Serving/Cutting Boards</p>
              <p className="linkTitlesText">Table Top</p>
              <p className="linkTitlesText">Wall Decor</p>
              <p className="linkTitlesText">Clocks</p>
              <p className="linkTitlesText">Paintings</p>
            </div>
      	    <div className="imageAndArrows">
              <p className="imageTitle">Red Pointer Clock</p>
      	    	<i className="fa fa-arrow-circle-left" aria-hidden="true" onClick={this.toNextImage}></i>
        		<img alt="test1" className="images" src={this.state.imgToDisplay} style={imagesStyle}></img>
        		<i className="fa fa-arrow-circle-right" aria-hidden="true" onClick={this.toPreviousImage}></i>
              	<p className="imageDescriptionLine1">Diameter: 50cm (19.7")</p>
              	<p className="imageDescriptionLine2">https://www.etsy.com/listing/546585978/small-serving-or-cutting-board?ref=shop_home_active_1</p>
        	  </div>
            <div className="linkDescriptions">
              <p className="linkDescriptionsText">These items can be used as a serving tray as well as a cutting board. Wall decor ideas are also available in matching colors</p>
            </div>
       		
      	</div>
    );
  }
}
export default Gallery;

const GalleryStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems:'center',
  marginLeft:'auto',
  marginRight:'auto',
  textAlign:'center',
  borderRadius:'10px',
  fontSize: '2em',
  fontFamily: 'Just Another Hand',
  width:'90%',
  height:'90%',
  animation: 'opacitychange 0.15s',
  marginTop:'20px',
  marginBottom:'20px'
}
const imagesStyle = {
	animation: 'opacitychange 2.5s',
  borderRadius: '10px',
  width:'40%',
  height: '400px',
  marginLeft:'20px',
  marginRight:'20px',
  overflow:'scroll'
}
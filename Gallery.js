import React, { Component } from 'react';
import Radium from 'radium';
import {StyleRoot} from 'radium';
//var image1 = require('./images/clock1.png');
//var image2 = require('./images/clock2.png');
//var image3 = require('./images/clock3.png');
/*var image4 = require('./images/cuttingBoard4.jpg');
var image5 = require('./images/cuttingBoard5.png');
var image6 = require('./images/cuttingBoard6.png');
var image7 = require('./images/cuttingBoard7.png');*/

var imagesArr = [];
var imageNumber = 0;


class Gallery extends React.Component {

    constructor(props){
      super(props);

      this.imagesUrlArr = [];
      this.imagesTitleArr = [];
      this.imagesLinkArr = [];
      for(var n=0; n<=window.listingsObj.length-1;n++){
        this.imagesUrlArr.push(window.listingsObj[n].Images[0].url_fullxfull);
        this.imagesTitleArr.push(window.listingsObj[n].title);
        this.imagesLinkArr.push(window.listingsObj[n].url);
      }

      this.state={
          listingsObj:window.listingsObj,
          itemToDisplay:0
      }
    }

  

  toNextImage=(e)=>{
    if(imageNumber<this.state.listingsObj.length-1 && imageNumber>=0){
      imageNumber++;
    }else{
      imageNumber=0;
    }
    
    this.setState({imgToDisplay:imagesArr[imageNumber],itemToDisplay:imageNumber});
  }
  toPreviousImage=(e)=>{
    if(imageNumber>0){
      imageNumber--;
    }else{
      imageNumber=this.state.listingsObj.length-1;
    }
    this.setState({imgToDisplay:imagesArr[imageNumber],itemToDisplay:imageNumber});
  }

    render() {
      

      return (
        <div style={style}>
        <StyleRoot style={style}>
        <div className="Gallery" style={GalleryStyles}>
          
            {/*<div className="linkTitles">
              <p className="linkTitlesText">Serving/Cutting Boards</p>
              <p className="linkTitlesText">Table Top</p>
              <p className="linkTitlesText">Wall Decor</p>
              <p className="linkTitlesText">Clocks</p>
              <p className="linkTitlesText">Paintings</p>
            </div>*/}
            <div className="imageAndArrows" style={imageAndArrowsStyle}>
              <p className="imageTitle" style={imageTitleStyle}>{this.state.listingsObj[imageNumber].title} </p>
              <i key='k1' className="fa fa-arrow-circle-left" aria-hidden="true" onClick={this.toNextImage} style={faStyle}></i>
              <img alt="test1" className="images" src={this.imagesUrlArr[imageNumber]} style={imagesStyle}></img>
              <i key='k2' className="fa fa-arrow-circle-right" aria-hidden="true" onClick={this.toPreviousImage} style={faStyle}></i>
              {/*<p className="imageDescriptionLine1">Diameter: 50cm (19.7")</p>*/}
              <a href={this.imagesLinkArr[imageNumber]} className="imageDescriptionLine2" style={imageLink}>{this.imagesLinkArr[imageNumber]}</a>
            </div>
            {/*<div className="linkDescriptions">
              <p className="linkDescriptionsText">These items can be used as a serving tray as well as a cutting board. Wall decor ideas are also available in matching colors</p>
            </div>*/}
          
        </div>
        </StyleRoot>
        </div>
    );
  }
}
export default Radium(Gallery);
const style = {
  height:'100%'
}
const imageAndArrowsStyle = {
  height:'100%'
}

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
  
  animation: 'opacitychange 0.15s',
  marginTop:'20px',
  marginBottom:'20px',
  '@media(min-width:1001px)': {
    height:'80%',
    width:'60%'
  },      
  '@media(min-width:850px) and (max-width:1000px)': {
    height:'80%',
    width:'80%'  
  },
  '@media(min-width:450px) and (max-width:850px)': {
    height:'80%',
    width:'80%'
  },
  '@media(min-width:0px) and (max-width:450px)': {
    height:'80%',
    width:'80%'
  }
}

const imageTitleStyle = {

  '@media (max-width: 800px)':{
    fontSize:24
  },
  '@media (max-width: 600px)':{
    fontSize:20
  },
  '@media (max-width: 400px)':{
    fontSize:16
  }
}
const imagesStyle = {
  animation: 'opacitychange 2.5s',
  borderRadius: '10px',
  minWidth: '40%',
  height: '400px',
  marginLeft:'20px',
  marginRight:'20px',
  overflow:'scroll',
  '@media(min-width:1001px)': {
        width:'60%',
        height:'60%'
      },      
    '@media(min-width:850px) and (max-width:1000px)': {
        width:'50%',
        height:'60%'
      },
      '@media(min-width:450px) and (max-width:850px)': {
        width:'60%',
        height:'60%'
      },
      '@media(min-width:0px) and (max-width:450px)': {
        width:'50%',
        height:'50%'
      }


}
const faStyle = {
  
  ':hover':{
    color:'red'
  },
  '@media(min-width:1001px)': {
        fontSize:26
      },      
    '@media(min-width:850px) and (max-width:1000px)': {
        fontSize:22   
      },
      '@media(min-width:450px) and (max-width:850px)': {
        fontSize:18
      },
      '@media(min-width:0px) and (max-width:450px)': {
        fontSize:14
      }
}

const imageLink = {
  color:'white',
  fontSize:25,
  textAlign:'center',
  padding:10,
  margin:0,
  width:'100%',
  '@media(min-width:1001px)': {
        fontSize:26
      },      
    '@media(min-width:850px) and (max-width:1000px)': {
        fontSize:22   
      },
      '@media(min-width:450px) and (max-width:850px)': {
        fontSize:18
      },
      '@media(min-width:0px) and (max-width:450px)': {
        fontSize:14
      }
}
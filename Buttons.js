import React, { Component } from 'react';




class Buttons extends Component {
  render() {

    return (
      <div className="Buttons">
      	<div className="buttonsDiv">
            <button className="buttons" onClick={this.props.toGallery} >GALLERY</button>
            <button className="buttons" onClick={this.props.toContact} >CONTACT</button>
            <button className="buttons">BIOGRAPHY</button>
            <button className="buttons">COMMENTS</button>
            <button className="buttons">RANDOM STUFF</button>
            <button className="buttons" onClick={this.props.toHome}>HOME</button>
        </div>

      </div>
    );
  }
}

export default Buttons;

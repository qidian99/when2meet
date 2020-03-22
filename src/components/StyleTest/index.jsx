import React, { Component } from "react";
import ReactDOM from "react-dom";

var styles = {
	color:'red',
	backgroundColor:'black',
	fontWeight:'bold'
};

class StyleTest extends Component {
  render() {
    return (
      <div style={styles}>test</div>
    );
  }

}

export default StyleTest;

const wrapper = document.getElementById("container");

wrapper ? ReactDOM.render(<StyleTest />, wrapper) : false;
import React, { Component } from "react";
import ReactDOM from "react-dom";
import videojs from 'video.js'

class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>	
        <div data-vjs-player>
          <video ref={ node => this.videoNode = node } className="video-js"></video>
        </div>
      </div>
    )
  }
}

export default VideoPlayer

const wrapper = document.getElementById("container");

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [{
    src: '../../../assets/cv.mp4',
    type: 'video/mp4'
  }]
}

wrapper ? ReactDOM.render(<VideoPlayer { ...videoJsOptions } />, wrapper) : false;


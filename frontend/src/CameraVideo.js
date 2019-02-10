import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import axios from 'axios' 
import App from './App';
class CameraVideo extends Component {

   constructor (props) {
       super(props);
       this.state = {callback: props.callback} 
   }

  onTakePhoto (dataUri) {
      this.props.callback(dataUri);
  }
 
  render () {
    return (
      <div className="App">
        <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }

        />
      </div>
    );
  }
}
 
export default CameraVideo;

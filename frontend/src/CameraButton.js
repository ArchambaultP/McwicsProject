import React from 'react';
import CameraVideo from './CameraVideo';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

class CameraButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {displayCamera : false};
    }

    displayCamera = () => {
        this.setState({
            displayCamera : !this.state.displayCamera
        })
    }

    render(){
        let questions;
        if(this.state.displayCamera){
            questions = <CameraVideo />
        }

        return( 
        <div>
        <label htmlFor="icon-button-file" >
        <IconButton color="primary" component="span">
          <PhotoCamera onClick={this.displayCamera} />
        </IconButton>
      </label>
            {questions}
        </div>
        );
    }
}

export default CameraButton;

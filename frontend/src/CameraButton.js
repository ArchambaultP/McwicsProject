import React from 'react';
import CameraVideo from './CameraVideo';

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
            <h1 onClick={this.displayCamera}>Hello World</h1>
            {questions}
        </div>
        );
    }
}

export default CameraButton;

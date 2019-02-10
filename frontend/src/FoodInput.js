import React, { Component } from 'react';

class FoodInput extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			query: ''
		}
	}

	updateText(event){
		this.setState({query: event.target.value});
		this.props.onChange(event);
	}

	render (){
		return (
			<div className='input-field col s12'>
				<input placeholder="Enter ingredients" className='autocomplete' type='text' 
				onChange={
					event => this.updateText(event)
				}
					value={this.state.query} />
			</div>
		)

	}
};

export default FoodInput;

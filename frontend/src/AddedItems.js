import React, { Component } from 'react';

// Contains a list of items that are rendered.
class AddedItems extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			items: []
		}
	}

	render(){
	  return (
	    <ul className='collection'>
	      {this.props.items.map( child => <Item value={child}/> )}
	    </ul>
		);
	}
};

const Item = (props) =>{
	return (
	  <li className='collection-item'>
			{props.value}
	  </li>
		
	);
};

export default AddedItems;
import React, { Component } from 'react';
import FoodInput from './FoodInput';
import logo from './logo.svg';
import './App.css';
import M from 'materialize-css';

const foods =  {'Banana': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34khhDou8YgsAKBHsl5ROXrgc0q2Y4b56IzwAQp05-hjCZAuq', 'Chocolate':null, 'Strawberry':null, 'Kale':null,
                  'Potatoe':null, 'Carrot':null, 'Onion':null, 'Beet':null, 'Artichoke':null, 
                    'Garlic':null, 'Chili Peppers':null, 'Tomato':null} 


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {suggestions: foods};
    this.handleTextInput = this.handleTextInput.bind(this);
//		this.handleKeyPress = this.handleKeyPress.bind(this);
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.autocomplete');
      var instances = M.Autocomplete.init(elems, { data: foods, limit: 10, onAutoComplete: () => console.log("AUTOCOMPLETED")});
    });
  }
  
  handleTextInput(event) {
    console.log(event.target.value);
  }
  

  render() {
    return (
      <form onSubmit={e => { e.preventDefault(); }}>
				<h1> Fridge2Meals </h1>
        <div className='row'>
          <FoodInput onChange={text => this.handleTextInput(text)}/>
        </div>
				<div id='items' className='row'>
				</div>

      </form>
    );
  }
}

export default App;

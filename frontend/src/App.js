import React, { Component } from 'react';
import FoodInput from './FoodInput';
import AddedItems from './AddedItems';
import logo from './logo.svg';
import './App.css';
import M from 'materialize-css';
import axios from 'axios';

const foods =  {'Banana': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34khhDou8YgsAKBHsl5ROXrgc0q2Y4b56IzwAQp05-hjCZAuq', 'Chocolate':null, 'Strawberry':null, 'Kale':null,
                  'Potatoe':null, 'Carrot':null, 'Onion':null, 'Beet':null, 'Artichoke':null, 
                    'Garlic':null, 'Chili Peppers':null, 'Tomato':null} 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {suggestions: foods, items: [], recipes: []};
  };
  
	componentDidMount(){
      var elems = document.querySelectorAll('.autocomplete');
			var options = {  
						data: foods, 
						limit: 10, 
            onAutocomplete: (text) => {this.handleAutocomplete(text)},
            minLength: 2
			}
      var instances = M.Autocomplete.init(elems, options);
	}
  handleAutocomplete = (text) => {
		this.setState({children: this.state.items.push(text)});
  }

  handleTextInput = (text) => {
    console.log(text);
  }
	
	renderView = () => {
		var getParameters = this.state.items.toString();
		var query = 'localhost/recipes?i=' + getParameters;
		axios.get(query)
			.then(res => {
				const resRecipes = res.results;
				//this.setState( {recipes: resRecipes});
			})
	}

  render() {
    return (
      <form onSubmit={() => this.renderView()} >
        <h1> Fridge2Meals </h1>
        <div className='row'>
          <FoodInput onChange={text => this.handleTextInput(text)}/>
        </div>
        <div className='row'>
          <AddedItems items={this.state.items}/>
        </div>
				<input type='submit'/>
      </form>
    );
  }
}


export default App;

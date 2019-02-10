import React, { Component } from 'react';
import FoodInput from './FoodInput';
import AddedItems from './AddedItems';
import List from './List';
import CameraButton from './CameraButton';
import CameraVideo from './CameraVideo';
import logo from './logo.svg';
import './App.css';
import './List.css';
import M from 'materialize-css';
import axios from 'axios';

const foods =  {'Banana': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34khhDou8YgsAKBHsl5ROXrgc0q2Y4b56IzwAQp05-hjCZAuq', 'Chocolate':null, 'Strawberry':null, 'Kale':null,
                  'Potatoe':null, 'Carrot':null, 'Onion':null, 'Beet':null, 'Artichoke':null, 
                    'Garlic':null, 'Chili Peppers':null, 'Tomato':null} 

//axios.defaults.baseURL = location.protocol + '//' + location.hostname + ':' + 3050;
const instance = axios.create({baseURL: 'http://localhost:3050'})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {suggestions: foods, items: [], recipes: [], render: true};
  };

    onTakePhoto (dataUri) {
        // Do stuff with the dataUri photo...
        //dataUri = dataUri.split(',')[1];
        console.log(dataUri);
        instance.post('/fromPicture', {picture:dataUri},{headers: {
            'Content-Type': 'multipart/form-data'
        } } )
            .then(function(response){
                console.log("works");
            });
   }

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
	
	renderView = (e) => {
      e.preventDefault();
		var getParameters = this.state.items.toString();
		var query = '/recipes?ingredients=' + getParameters;
		  instance.get(query)
			.then(res => {
				const resRecipes = res.data;
				  this.setState( {recipes: resRecipes, render:false});
			})
	}

  render() {
    if (!this.state.render){
      return <List recipes={this.state.recipes}/>;
    } else{
    return (
      <form onSubmit={(e) => this.renderView(e)} >
        <h1> Fridge2Meals </h1>
        <div className='row'>
          <FoodInput onChange={text => this.handleTextInput(text)}/>
        </div>
        <div className='row'>
          <AddedItems items={this.state.items}/>
        </div>
				<input type='submit'/>
            <CameraButton callback={this.onTakePhoto}/>
        
      </form>
    );
    }
  }
}


export default App;

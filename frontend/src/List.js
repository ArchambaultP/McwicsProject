import React, { Component } from 'react';
import ListItems from './ListItems';
import './List.css';

class List extends React.Component {
    render() {
          const recipes = this.props.recipes;
          const listItems = recipes.results.map((recipes) => <ListItems recipes = {recipes}/>);
      return (
          <div className="ulist">
              <h1 className="ribbon-title--a">Recipe's For You!</h1>
              <ul className="ulist">{listItems}</ul>
          </div>
      );
    }   
  } 
  
export default List;

import React, { Component } from 'react';
// import Recipe from './Recipe';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
	constructor(props){
		super(props);
		this.state = {
			recipes:[
			   	{id:1,title:"pasta", ingredients:["flour","water"], instructions : "Mix ingredients", img:"pasta.jpeg" },
				 	{id:2,title:"pasta", ingredients:["flour","water"], instructions : "Mix ingredients", img:"pasta.jpeg" },
				 	{id:3,title:"pasta", ingredients:["flour","water"], instructions : "Mix ingredients", img:"pasta.jpeg" }	
				],
			nextRecipeId:4,
		}
	}
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList recipes = {this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;
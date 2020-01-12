import React, { Component } from 'react';
// import Recipe from './Recipe';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';
import './RecipeApp.css';

class RecipeApp extends Component {
	constructor(props){
		super(props);
		this.state = {
			recipes:[
			   	{id:0,title:"pasta", ingredients:["flour","water"], instructions : "Mix ingredients", img:"pasta.jpeg" },
				 	{id:1,title:"pasta", ingredients:["flour","water"], instructions : "Mix ingredients", img:"pasta.jpeg" },
				 	{id:2,title:"pasta", ingredients:["flour","water"], instructions : "Mix ingredients", img:"pasta.jpeg" }	
				],
			nextRecipeId:3,
		}
		this.handleSave = this.handleSave.bind(this); 
	}

	handleSave(recipe){
		this.setState((prevState, props) => {
			const newRecipe = {...recipe,id: this.state.nextRecipeId};
			return {
				nextRecipeId:prevState.nextRecipeId+1,
				recipes: [...this.state.recipes,newRecipe]
			}
		});
	}
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeInput onSave = {this.handleSave} />
        <RecipeList recipes = {this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;
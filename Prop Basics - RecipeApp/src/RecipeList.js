import React, { Component } from 'react';
import './RecipeList.css';
import Recipe from './Recipe';
import PropTypes from 'prop-types';

class RecipeList extends Component {
	

	static propTypes ={
		recipes:PropTypes.arrayOf(PropTypes.object)
	};
	static defaultProps = {
			recipes:[{title:"pasta", ingredients:["flour","water"], instructions : "Mix ingredients", img:"pasta.jpeg" },
				 {title:"pasta", ingredients:["flour","water"], instructions : "Mix ingredients", img:"pasta.jpeg" },
				 {title:"pasta", ingredients:["flour","water"], instructions : "Mix ingredients", img:"pasta.jpeg" }	
				]
	};
	render(){
		const recipes = this.props.recipes.map((r,i)=> (<Recipe key={i} {...r} />));

		return (
			<div className="recipe-list">
				{recipes}
			</div>
		)
	}
}

export default RecipeList;
import React, { Component } from 'react';
import './RecipeList.css';
import Recipe from './Recipe';
// import PropTypes from 'prop-types';

class RecipeList extends Component {
	
	render(){
		const recipes = this.props.recipes.map((r,i)=> (<Recipe key={r.id} {...r} onDelete={this.props.onDelete} />));
		return (
			<div className="recipe-list">
				{recipes}
			</div>
		)
	}
}

export default RecipeList;
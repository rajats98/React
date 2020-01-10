import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RecipeApp from './RecipeApp';
import * as serviceWorker from './serviceWorker';

const recipes = [{title:"pasta", ingredients:["flour","water"], instructions : "Mix ingredients", img:"pasta.jpeg" },
				 {title:"pasta", ingredients:["flour","water"], instructions : "Mix ingredients", img:"pasta.jpeg" },
				 {title:"pasta", ingredients:["flour","water"], instructions : "Mix ingredients", img:"pasta.jpeg" }	
				];


ReactDOM.render(<RecipeApp {...recipes}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

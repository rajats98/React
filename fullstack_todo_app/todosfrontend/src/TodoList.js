import React, {Component} from 'react';
const APIURL ='/api/todos';
class TodoList extends Component{
	constructor(props){
		super(props);
		this.state = {
			todos:[]
		}
	}
	componentDidMount(){
		this.loadTodos();
	}

	loadTodos(){
		fetch(APIURL)
		 .then(res =>{ 
		 		if(!res.ok){
		 			if(res.status>=400 && res.status<500){
		 				return res.json().then(data => {
		 					let err = {errorMessage: data.message};
		 					throw err;
		 				})
		 			}
		 			else {
		 				let err = {errorMessage:'Please try again later, Serve is not responding'};
		 				throw err; 
		 			}
		 		}
		 		return res.json();
		 	})
		 .then(todos => this.setState({todos}));
	}
	render() {

		return (
			<div>
				<h1>TodoList</h1>
			</div>
		);
	}
}
export default TodoList;
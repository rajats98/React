const APIURL ='/api/todos/';

export async function getTodos() {
	return fetch(APIURL)
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
		
}

export async function createTodo(newTodo) {
	return fetch(APIURL,{
		method:'post',
		headers: new Headers({
			'Content-Type':'application/json' 
		}),
		body: JSON.stringify({name:newTodo})
	})
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
}

export async function removeTodo(id) {
	const deleteURl = APIURL+id;
	fetch(deleteURl,{
		method:'delete'
	})
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
 	
}

export async function updateTodo(todo) {
	const updateURL = APIURL+todo._id;
	return fetch(updateURL,{
		method:'put',
		headers: new Headers({
			'Content-Type':'application/json' 
		}),
		body: JSON.stringify({completed: !todo.completed})
	})
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
}
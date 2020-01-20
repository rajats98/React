// reducer (rootReducer)
// redux store and initialState
// we need some way of changing the state

const initialState = {
	count:0
}
function rootReducer(state=initialState,action) {
	switch(action.type){
		case "INCREMENT":
			var newState = {...state};
			newState.count++;
			return newState;
		case "DECREMENT":
			var newState = {...state};
			newState.count--;
			return newState;
		default:
			return state; 
	}
}

const store = Redux.createStore(rootReducer);

const increment = ()=>({type:'INCREMENT'});
const decrement = ()=>({type:'DECREMENT'});
$(document).ready(function(){
	let currentState = store.getState();
	$('#counter').text(currentState.count);	
	
	$("#increment").on("click",function(){
		store.dispatch(increment());
		let currentState = store.getState();
		$('#counter').text(currentState.count);
	})
	$("#decrement").on("click",function(){
		store.dispatch(decrement());
		let currentState = store.getState();
		$('#counter').text(currentState.count);
	})
})
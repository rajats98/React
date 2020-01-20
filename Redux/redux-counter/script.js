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
const updateCounter = ()=>{
	let currentState = store.getState();
	$('#counter').text(currentState.count);	
}
$(document).ready(function(){
	updateCounter();
	$("#increment").on("click",function(){
		store.dispatch(increment());
		updateCounter();
		
	})
	$("#decrement").on("click",function(){
		store.dispatch(decrement());
		updateCounter();
	})
})
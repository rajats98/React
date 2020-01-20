# Redux basics (without react)
1. Create a reducer (rootReducer) with some initial state
1. Create a redux store -> the reducer is run and our initial state is defined
1. whenever we want to see our state -> store.getState()
1. whenever we want to make a change to our state -> store.dispatch()
	1. actions are object
	1. actions must have a key of "type"
1. writing a function that returns an object 
	1. writing a function that returns an action -> action creator
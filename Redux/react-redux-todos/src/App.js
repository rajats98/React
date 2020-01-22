import React from 'react';
import TodoList from  './TodoList';
import './App.css';
import {Link, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1> Welcome to App </h1>
      <p>
        <Link to="/todos">See my Todos!</Link>
      </p>
      <p>
        <Link to="/todos/new">Add a Todo!</Link>
      </p>
      <Route path="/todos" component={TodoList}/>
      <Route exact path="/" render={()=><Redirect to='/todos'/>} />
    </div>
  );
}

export default App;

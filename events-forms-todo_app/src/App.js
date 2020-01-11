import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {input:"",list:[]};
  } 
  render(){
    return (
      <div className="App">
        <form
          
        >
          <input 
            type='text'
            name='input'
            value={this.state.input}
            onChange={(e)=>{
              this.setState({[e.target.name]:e.target.value});
            }}
          />
   
          <button>Add Todo</button>
        </form>

        <ol>

        </ol>

      </div>
    );
  }
}

export default App;

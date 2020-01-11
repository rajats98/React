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
        <h3>Simple Todo App</h3>
        <form
          onSubmit = {(e)=>{
            e.preventDefault();
            const list = [...this.state.list,this.state.input];
            this.setState({list,input:""});
        }}
        >
          <input 
            type='text'
            name='input'
            placeholder="What needs to be done?"
            value={this.state.input}
            onChange={(e)=>{
              this.setState({[e.target.name]:e.target.value});
            }}
          />
   
          <button>Add Todo</button>
        </form>

        <Todos 
          list = {this.state.list}
        />

      </div>
    );
  }
}

class Todos extends Component{
  render() {
    const list = this.props.list.map((item,i)=>(<li key={i} >{item}</li>));
    console.log(list);
    return (
      <ol>
        {list}
      </ol>
    );
  }
}

export default App;

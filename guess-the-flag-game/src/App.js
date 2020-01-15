import React,{Component} from 'react';
import Question from './Question';
import Result from './Result';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allCountries : undefined,
      options: [],
      answer: "",
      optionSelected:"",
      currentState:0   //0->question,1->correct Ans 2->wrong Ans
    } 
    this.makeQuestion = this.makeQuestion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNext   = this.handleNext.bind(this);
  }

  makeQuestion(){
    const countries = this.state.allCountries;
    let options = Array(4).fill().map((e,i)=>(countries[Math.floor(Math.random()*countries.length)]));
    const answer = options[Math.floor(Math.random()*4)] ;    
    this.setState({options,answer});
  }

  handleSubmit(e){
    e.preventDefault();
    const {optionSelected, answer} = this.state;
    let currentState=0;
    optionSelected===answer ? currentState=1 : currentState=2;
    this.setState({currentState})
  }
  handleChange(index){
    const optionSelected = this.state.options[index];
    this.setState({optionSelected});
  }
  handleNext(){
    this.setState({
      options: [],
      answer: "",
      optionSelected:"",
      currentState:0   //0->question,1->correct Ans 2->wrong Ans
    },this.makeQuestion);
  }
  async componentDidMount(){
    let allCountries = await fetch("http://restcountries.eu/rest/v2/all");
    allCountries = await allCountries.json();
    allCountries = allCountries.map((c)=>({name: c.name,flag:c.flag}));
    this.setState({allCountries});
    this.makeQuestion();
  }

  render() {
    let {options,currentState,answer,optionSelected,allCountries} = this.state;
    let view = <div>Loading .... </div>;
    if(allCountries!==undefined){
      view = currentState===0
      ? <Question options={options} handleSubmit={this.handleSubmit} handleChange={this.handleChange} optionSelected={optionSelected}/> 
      : <Result answer={answer} currentState={currentState} handleNext={this.handleNext}/>
  
    }
    return (
      <div className="App">
        <h2>Guess The Country</h2>
        {view}
        <img src = {this.state.answer.flag} alt="flag" />
      </div>
    );
  }
}

export default App;

    
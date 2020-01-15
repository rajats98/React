import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allCountries : [],
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
    let {options,currentState,answer} = this.state;
    options = options.map((o,i)=>(
      <p key={i}> 
        <input type="radio" id={`option-${i}`} name="option" onChange={()=>{this.handleChange(i)}} />
        {o.name}
      </p>
    ));

    let view = currentState===0
    ? <Question options={options} handleSubmit={this.handleSubmit}/> 
    : <Result answer={answer} currentState={currentState} handleNext={this.handleNext}/>

    return (
      <div className="App">
        <h2>Guess The Country</h2>
        {view}
        <img src = {this.state.answer.flag} alt="flag" />
      </div>
    );
  }
}

const Question = (props)=>{
  const {options,handleSubmit} = props;
  return(
    <div className="form-container">
      <form onSubmit = {handleSubmit}>
          {options}
        <button> Guess </button>
      </form>
    </div>
  )
}
const Result = (props)=>{
  const {answer,currentState,handleNext} = props;
  let toRender =  <div>
                    {currentState===1
                    ?<p className="correct-answer">Yay!! Correct Answer! </p>
                    :<p className="wrong-answer"> :( Incorrect Answer! <span> Correct:<b>{answer.name}</b></span></p>}
                     <button onClick = {handleNext}> Next  </button>
                  </div>
  return(
    toRender
  );
}

export default App;

    
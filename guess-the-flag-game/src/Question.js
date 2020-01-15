import React from 'react';

const Question = (props)=>{
  let {options,handleSubmit,handleChange,optionSelected} = props;
  options = options.map((o,i)=>(
    <label key={i}> 
      <input type="radio" checked={o===optionSelected?true:false} id={`option-${i}`} name="option" onChange={()=>{handleChange(i)}} />
      {o.name}
    </label>
  ));

  return(
    <div className="form-container">
      <form onSubmit = {handleSubmit}>
          {options}
        <button> Guess </button>
      </form>
    </div>
  )
}

export default Question;
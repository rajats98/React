import React from 'react'

const Result = (props)=>{
  const {answer,currentState,handleNext} = props;
  let toRender =  <div>
                    {
                      currentState===1
                      ?<p className="correct-answer">Yay!! Correct Answer! </p>
                      :<p className="wrong-answer"> :( Incorrect Answer! <span> Correct:<b>{answer.name}</b></span></p>
                    }
                     <button onClick = {handleNext}> Next  </button>
                  </div>
  return toRender;
}

export default Result;
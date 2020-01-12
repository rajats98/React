import React from 'react';

const Box = (props)=>{
  const {id,currentState,color,handleClick} = props;
  const className= `box state-${currentState}`;
  return <div className={className} style={{background:color}} onClick={()=>{handleClick((Number(id.split('-')[1])))}}> </div>
}

export default Box;
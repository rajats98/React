import React, {Component} from 'react';
import Box from './Box'
class Boxes extends Component {
   
  render(){
  	const {colors,boxes,handleClick} = this.props;
    const current = boxes.map((item,i)=> (
      <Box key={i}
        id={'box-'+i}
        currentState={boxes[i]} 
        color={colors[i]} 
        handleClick = {handleClick}
      />)
    );

    return (
      <div className="box-container">
        {current}
      </div>
    )
  }
}


export default Boxes;
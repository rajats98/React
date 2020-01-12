import React, {Component} from 'react';
import Box from './Box'
class Boxes extends Component {
   
  constructor(props){
    super(props);
    this.state = { boxes: Array(16).fill(0),  selected: [] };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id){
    let boxes = this.state.boxes.slice();
    let selected = this.state.selected.slice()
    let numSelected = selected.length;
    const {colors} = this.props;
    if(boxes[id]!==0 || numSelected>1) return;

    if(numSelected===0){
      //selected push id
      selected.push(id);
      //boxes update
      boxes[id]=1;
    }
    else if(numSelected===1){
      //if color same set state 2 for both
      let lastColor = colors[selected[0]],
          thisColor = colors[id];
      if(lastColor===thisColor){
        boxes[selected[0]]=2;
        boxes[id]=2;
        selected = [];
      }
      else{
        boxes[id]=1;
        selected.push(id);

        setTimeout(()=> {
          boxes[id]=0;
          boxes[selected[0]]=0;
          selected =[];
          this.setState({boxes,selected});
        },2500)
      }

      //else update boxes and setTimeout to hide color
    }
    
    this.setState({boxes,selected});
  }

  render(){
    const current = this.state.boxes.map((item,i)=> (
      <Box key={i}
        id={'box-'+i}
        currentState={this.state.boxes[i]} 
        color={this.props.colors[i]} 
        handleClick = {this.handleClick}
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
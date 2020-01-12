import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    const {allColors} =this.props;
    let colors = Array(8).fill().map(()=>(allColors[Math.floor(Math.random()*allColors.length)]));
    colors = [...colors,...colors];
    // console.log(colors);
    return (
      <Boxes colors={colors}/>
    );
  }
}

class Boxes extends Component {
   
  constructor(props){
    super(props);
    this.state = {
      boxes: Array(16).fill(0), // stores state of boxes 0->hiding, 1->showing, 2->matched
      selected: []
    }

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

const Box = (props)=>{
  const {id,currentState,color,handleClick} = props;
  const className= `box state-${currentState}`;
  return <div className={className} style={{background:color}} onClick={()=>{handleClick((Number(id.split('-')[1])))}}> </div>
}

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};

export default App;

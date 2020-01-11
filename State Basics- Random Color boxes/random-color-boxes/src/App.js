import React, { Component } from 'react';
import './App.css';

const NUM_BOXES=32;
class App extends Component {
  
  constructor(props) {
    super(props);
    const arr = Array(NUM_BOXES).fill().map(()=>(Math.floor(Math.random()*this.props.allColors.length)));
    this.state = {arr};

    setInterval(()=>{
      const r_box_index = Math.floor(Math.random()*32);
      const r_color_index = Math.floor(Math.random()*this.props.allColors.length);
      const arr = this.state.arr.slice();
      arr[r_box_index]=r_color_index;
      this.setState({arr});
    },300);
  }
  

  render() {

    return (
      <div className="App">
        
        <Boxes
          arr={this.state.arr}
          allColors= {this.props.allColors}
         />
      </div>
    );
  }
}

class Boxes extends Component {
  render() {
    const allColors = this.props.allColors;
    const arr = this.props.arr.map((item,i) => (<Box key={i} color={allColors[item]} />))
    return (
      <div className="box-container">
        {arr}
      </div>
    );
  } 
}

class Box extends Component{
  render(){
    
    return(
      <div className="box" style={{background:this.props.color}}>
      </div>
    )
  }
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

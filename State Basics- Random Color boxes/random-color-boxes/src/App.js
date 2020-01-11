import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      arr:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    }
    setInterval(()=>{
    const allColors = this.props.allColors;
    const r_box_index = Math.floor(Math.random()*31);
    const r_color_index = Math.floor(Math.random()*(allColors.length-1));
    // const temp = [...this.state.arr.slice(0,2)];
    // console.log(temp);
    // const arr = [...this.state.arr.slice(0,r_box_index),r_color_index,...this.state.arr.slice(r_box_index+1)];
    // console.log(arr.length,r_box_index,r_color_index);
    // this.setState({arr});
    this.setState((prevState,props)=>{
    const arr = [...prevState.arr.slice(0,r_box_index),r_color_index,...prevState.arr.slice(r_box_index+1)];
      return {arr};
    })
  },3000)
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

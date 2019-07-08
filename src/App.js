import React,{Component} from 'React';
import Shape from './Shape';

class Selector extends Component{
  constructor(){
    super();
    this.state={
      selectedShape:'square',
    }
  }
  selectedShape =(shapeName)=>{
    this.setState(
      {
        selectedShape: shapeName,
      })
  }
  
  render(){
    return(
      <div className="container">
        <div className="navbar">
          <div> Selected:<span>this.state.shape</span></div>
        </div>
        <div className ="shape-list" >
<Shape shape="Square" selectShape={this.selectShape}/>
<Shape shape= "circle"selectShape={this.selectShape} />
<Shape shape = " Triangle"selectShape={this.selectShape}/>
        </div>
      </div>
    )
  }
}

export default Selector;
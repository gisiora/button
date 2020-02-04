import React,{Component} from 'react';

import './App.css';


export  default class App extends Component

{

constructor(props){


  super(props)
  this.state={
    counter:0,
    hasButtonBeenClicked: false
  }
}

render=()=>

<button Onclick={this.handleClick}
className={this.props.className}
disabled={this.props.disabled==="true"

|| this.props.disabled===true}>


  {this.props.text}{this.props.state.counter}
  {this.state.hasButtonBeenClicked&&
  <div>Button Clicked</div>}
</button>
handleClick=()=>{
  this.setState({counter: this.state.counter +1},
   ()=>this.setState({hasButtonBeenClicked:this.state.counter>0}) 
    
    
    );





}


}

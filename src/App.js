//import "./styles.css";
import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    console.log("inside child constructor");
    
    super(props);
    this.state = { color: props.color };
  }
  render(){
    console.log("child : ", this.state.color, this.props.color);
    return (
      <div style={{ color : this.state.color}}>Hello world</div>
    );
  }
}

class App extends Component{
  constructor(props){
    super(props);
    this.state = { color : 'red'};
  }
  render(){
    console.log(this.state.color);
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Label color={"blue"} value={"component"} />
        <Child color={this.state.color} />
        <button onClick={() => this.setState({ color: 'green'})}>Change color</button>
      </div>
    );
  }
  
}

function Label (props) {
  return <div style={{ color: props.color }}>{props.value}</div>
}
export default App;
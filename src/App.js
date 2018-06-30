import React, { Component } from 'react';
import SayHello from "./components/SayHello";
import Boder from "./components/Boder";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sittichai Wongfun" ,
      age: 22
    };
  }

  incrementAge(){
    this.setState({age: this.state.age +1})
  }
  decrementAge(){
    this.setState({age: this.state.age -1})
  }

  render() {
    return (
    <div className="App">
    <SayHello name={this.state.name}/>
    <p>Age , {this.state.age}</p>
    <div
         style={{
           width: this.state.age,
           border: 2,
           borderStyle: "solid",
           color: "#deab53"
         }}
       />
       <Boder>

    <button onClick={() => this.incrementAge()}>เพิ่มอายุ</button> {" "}
    <button onClick={() => this.decrementAge()}>ลดอายุ</button>
    </Boder>
    </div>
    );
  }
 }

export default App;

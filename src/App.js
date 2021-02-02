import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {name: "Ayush", age:16},
      {name: "Arnav", age:9},
      {name: "Advik", age:2},
    ]
  }
  switchNameHandler = () => {
    console.log("Clicked")
    //DON'T DO THIS: this.state.persons[0].name = "Snehal";
    this.setState({
      persons:[
        {name: "Ayush Gore", age:16},
        {name: "Arnav", age:9},
        {name: "Advik", age:3},
      ]
    })
  };
  render() {
    return (
      <div className="App">
       <h1>I am React app</h1>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Listening songs</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );

    // JSX code get compiled into this at compile time
    //  JSX restictions:
    // 1.for css style we have to write className
    // 2.Must have only one root
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work'))
  }
}

export default App;

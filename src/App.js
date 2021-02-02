import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [state, setState] = useState({
    persons:[
      {name: "Ayush", age:16},
      {name: "Arnav", age:9},
      {name: "Advik", age:2},
    ]
  });

  // We can use multiple useState to change only specific state part
  const [otherState, setOtherState] = useState("Some other state");
  console.log(state, otherState);
  const switchNameHandler = () => {
      // console.log("Clicked")
      //DON'T DO THIS: this.state.persons[0].name = "Snehal";
      setState({
        persons:[
          {name: "Ayush Gore", age:16},
          {name: "Arnav", age:9},
          {name: "Advik", age:3},
        ]
      })
    };
  
    return (
      <div className="App">
       <h1>I am React app</h1>
       <button onClick={switchNameHandler}>Switch Name</button>
       <Person name={state.persons[0].name} age={state.persons[0].age}/>
       <Person name={state.persons[1].name} age={state.persons[1].age}>My Hobbies: Listening songs</Person>
       <Person name={state.persons[2].name} age={state.persons[2].age}/>
      </div>
    );

    // JSX code get compiled into this at compile time
    //  JSX restictions:
    // 1.for css style we have to write className
    // 2.Must have only one root
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work'))
}

export default app;

// switchNameHandler = () => {
//   console.log("Clicked")
//   //DON'T DO THIS: this.state.persons[0].name = "Snehal";
//   this.setState({
//     persons:[
//       {name: "Ayush Gore", age:16},
//       {name: "Arnav", age:9},
//       {name: "Advik", age:3},
//     ]
//   })
// };
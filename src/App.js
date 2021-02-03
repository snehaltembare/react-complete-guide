import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Ayush", age: 16 },
      { name: "Arnav", age: 9 },
      { name: "Advik", age: 2 },
    ],
    showPersons: false
  }
  deletePersonHandler = (index) => {
  //  const persons = this.state.persons.slice();
   const persons = [...this.state.persons];
   persons.splice(index, 1)
   this.setState({persons: persons});
  };
  inputHandler = (event) => {
    this.setState({
      persons: [
        { name: "Ayush", age: 16 },
        { name: event.target.value, age: 9 },
        { name: "Advik", age: 3 },
      ]
    })
  };

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  };
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map((person, index) => {
           return <Person
           name={person.name}
           age={person.age}
           key={index}
           click={() => { this.deletePersonHandler(index)}}
           change={this.inputHandler}>
           My Hobbies: Listening songs
       </Person>
        })}
        {/* <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Ayush')}
          change={this.inputHandler}>
          My Hobbies: Listening songs
      </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} /> */}
      </div>)
    }
    return (
      <div className="App">
        <h1>I am React app</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );

    // JSX code get compiled into this at compile time
    //  JSX restictions:
    // 1.for css style we have to write className
    // 2.Must have only one root
    return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work'))
  }
}

export default App;

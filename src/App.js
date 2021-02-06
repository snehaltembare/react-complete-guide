import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';
const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red' : 'green'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;

&:hover {
  background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};;
  color: black;
}`;
class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Ayush", age: 16 },
      { id: "2", name: "Arnav", age: 9 },
      { id: "3", name: "Advik", age: 2 },
    ],
    showPersons: false
  }
  deletePersonHandler = (index) => {
    //  const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1)
    this.setState({ persons: persons });
  };
  inputHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons]

    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  };
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return <Person
            name={person.name}
            age={person.age}
            key={person.id}
            click={() => { this.deletePersonHandler(index) }}
            change={(event) => this.inputHandler(event, person.id)}>
            My Hobbies: Listening songs
       </Person>
        })}
      </div>);
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }
    return (
      <div className="App">
        <h1>I am React app</h1>
        <p className={classes.join(' ')}>This is really working!!</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>
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

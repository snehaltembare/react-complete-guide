import React from 'react';
import './Person.css';
import styled from 'styled-components';
import classes from './Person.css'
const person = (props) => {
    const style = {
        '@media (min-width:500px)': {
            width: '450px'
        }
    }
    return (
        <div className={classes.Person}>
            < p onClick={props.click} > I'm a {props.name} and I am {props.age} years old!</p>
            < p > {props.children}</p >
            <input type="text" onChange={props.change} value={props.name} />
        </div >
        )

}
export default person;
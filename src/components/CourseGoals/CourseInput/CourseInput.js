import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;

    /* Adapt the colors based on invalid prop */
    color: ${props => (props.invalid ? 'red' : 'black')};
  }

  & input {
    background-color: ${props => (props.invalid ? 'pink' : 'transparent')};
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
      //If input value length is greater than one, set isValid state to true
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
      //If form is submitted with 0 characters, set isValis state to false and return nothing
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* Dynamic way of adding classes
      Write template literal inside curly braces adding invakid className on the condition that the current isVlid state is false
       */}
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          //^^ If isValid state is NOT true, styles for label and input will be active
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

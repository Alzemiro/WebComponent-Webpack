import React from 'react';
import { Styled } from 'direflow-component';
import styles from './App.css';
import FormComponent from './components/form/form-component';

const App = () => {

  return (
    <Styled styles={styles}>
      <FormComponent />
    </Styled>
  );
};

export default App;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { EventContext, Styled } from 'direflow-component';
import styles from './App.css';
import FormComponent from './components/form/form-component';

const App = (props) => {

  return (
    <Styled styles={styles}>
      <FormComponent />
    </Styled>
  );
};

App.defaultProps = {
  componentTitle: 'Zoly Subscribe Form',
  sampleList: [
    'Create with React',
    'Build as Web Component',
    'Use it anywhere!',
  ],
}

App.propTypes = {
  componentTitle: PropTypes.string,
  sampleList: PropTypes.array,
};

export default App;

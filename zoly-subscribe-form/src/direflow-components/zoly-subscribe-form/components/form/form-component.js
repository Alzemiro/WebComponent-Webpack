import React from "react";
import styles from "./form-component.css";
import { Styled } from "direflow-component";

const FormComponent = () => {
 
  return (
    <Styled styles={styles}>
      <div>
        <h1>Hello World</h1>
        <button
          type="button"
          onClick={() => console.log("teste")}
        >
          Button teste
        </button>
      </div>
    </Styled>
  );
};

export default FormComponent;

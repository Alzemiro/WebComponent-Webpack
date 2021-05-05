import React from "react";
import styles from "./AnhangueraButton.style.css";
import { Styled } from "direflow-component";

// eslint-disable-next-line react/prop-types
const AnhangueraButton = ({ text, clicked, onClick }) => {
  console.log(clicked);
  return (
    <Styled styles={styles}>
      <button
        className={clicked === true ? "btn btn__active text" : "btn text"}
        type="button"
        onClick={onClick}
      >
        {text}
      </button>
    </Styled>
  );
};

export default AnhangueraButton;

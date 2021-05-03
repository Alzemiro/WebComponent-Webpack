import React from "react";
import styles from "./css/head-form-component.css";
import { Styled } from "direflow-component";

const HeadFormComponent = () => {
 
  return (
    <Styled styles={styles}>
      <div className="container">
        <div>
          <h4 className="font text">{"Como você gostaria de ingressar na Anhanguera?"}</h4>
        </div>
        <div className="btn-container">
          <div className="item">
            <button className="btn font" type="button">{"VESTIBULAR ONLINE"}</button>
          </div>
          <div className="item">
            <button className="btn font" type="button">{"NOTA DO ENEM"}</button>
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default HeadFormComponent;

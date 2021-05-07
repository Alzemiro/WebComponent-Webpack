import React, { useState } from "react";
import TooltipEnem from "../tootip-enem";
import styles from "./head-form-component.style.css";
import { Styled } from "direflow-component";

const HeadFormComponent = () => {
  const [btnEnemClick, setEnemClick] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  console.log(btnEnemClick);

  const handleClose = () => setOpenDialog(false);

  const handleEnemClick = () => {
    setOpenDialog(true);
    setEnemClick(true);
  };

  const handleVestibularClick = () => {
    setEnemClick(false);
  };

  return (
    <Styled styles={styles}>
      <div>
        <div className="container">
          <div>
            <h4 className="font text">
              {"Como você gostaria de ingressar na Anhanguera?"}
            </h4>
          </div>
        </div>
        <div className="btn__container">
          <button
            aria-checked={!btnEnemClick}
            className="btn__item"
            type="button"
            value="VESTIBULAR ONLINE"
            onClick={handleVestibularClick}
          >VESTIBULAR ONLINE</button>
          <button
            aria-checked={btnEnemClick}
            className="btn__item enem"
            type="button"
            value="NOTA ENEM"
            onClick={handleEnemClick}
          >NOTA ENEM</button>
        </div>
        <div className="modal__position">
          <TooltipEnem open={openDialog} onClose={handleClose} />
        </div>
      </div>
    </Styled>
  );
};

export default HeadFormComponent;

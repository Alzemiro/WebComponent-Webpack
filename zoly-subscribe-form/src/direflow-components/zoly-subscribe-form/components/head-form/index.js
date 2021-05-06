import React, { useState } from "react";
import TooltipEnem from "../tootip-enem";
import styles from "./head-form-component.style.css";
import { Styled } from "direflow-component";
import TooltipGatilho from "../tooltip-gatilho";

const HeadFormComponent = () => {
  const [btnEnemClick, setEnemClick] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClose = () => setOpenDialog(false);

  const handleEnemClick = () => {
    setOpenDialog(true);
    setEnemClick(true);
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
          <input
            name="btn_radio"
            className="btn__item"
            type="radio"
            value="VESTIBULAR ONLINE"
          />
          <input
            name="btn_radio"
            className="btn__item"
            type="radio"
            value="NOTA ENEM"
            id="enem"
            onClick={handleEnemClick}
          />
        </div>
        <div className="modal__position">
          <TooltipEnem open={openDialog} onClose={handleClose} />
        </div>
      </div>
    </Styled>
  );
};

export default HeadFormComponent;

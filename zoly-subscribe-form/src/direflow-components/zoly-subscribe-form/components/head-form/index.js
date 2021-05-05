import React, { useState } from "react"
import AnhangueraButton from "../../../../ui/anhanguera/components/AnhangueraButton"
import TooltipEnem from "../tootip-enem";
import styles from "./head-form-component.style.css"
import { Styled } from "direflow-component";

const HeadFormComponent = () => {
  const [btnEnemClick, setEnemClick] = useState(false);
  const [btnVestibularClick, setVestibularClick] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => setOpenDialog(true)

  const handleClose = () => setOpenDialog(false);

  const handleEnemClick = () => {
    if (!btnVestibularClick && !btnEnemClick){
      setEnemClick(true)
    }else if (btnEnemClick) {
      setVestibularClick(false)
    }
    return btnEnemClick
  }

  const handleVestibularClick = () => {
    if (!btnVestibularClick && !btnEnemClick) {
      setVestibularClick(true)
    }else if (btnVestibularClick) {
      setEnemClick(false)
    }
    return btnVestibularClick
  }
   
  return (
    <Styled styles={styles}>
      <div className="container">
        <div>
          <h4 className="font text">
            {"Como você gostaria de ingressar na Anhanguera?"}
          </h4>
        </div>
        <div className="btn__container">
          <div className="item">
            <AnhangueraButton
              clicked={false}
              text="VESTIBULAR ONLINE"
              onClick={handleVestibularClick}
              />
          </div>
          <div className="item">
            <AnhangueraButton
              clicked={true}
              text="NOTA ENEM"
              onClick={() => {
                handleClickOpen()
                handleEnemClick()
              }}
              />
          </div>
        </div>
        <div className="modal__position">
          <TooltipEnem open={openDialog} onClose={handleClose} />
        </div>
      </div>
    </Styled>
  );
};

export default HeadFormComponent;

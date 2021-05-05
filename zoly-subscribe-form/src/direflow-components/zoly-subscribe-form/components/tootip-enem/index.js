import React from "react";
import { Backdrop, Fade, Typography, Dialog } from "@material-ui/core"
import { Styled } from "direflow-component";
import styles from './tooltip-enem-component.style.css'

// eslint-disable-next-line react/prop-types
const TooltipEnem = ({ open, onClose }) => {
  return (
    <Styled styles={styles}>
      <Dialog
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
        >
        <Fade in={open}>
          <div className="paper">
            <Typography className="title">Ei, você Sabia Disso?</Typography>
            <Typography className="text">
              Você pode usar sua <strong>nota do Enem</strong> se fez a prova
              nos <strong>últimos dez anos</strong>. Se você optar pela
              inscrição através da nota do Enem,{" "}
              <strong>não precisará realizar o vestibular tradicional.</strong>
            </Typography>
          </div>
        </Fade>
      </Dialog>
    </Styled>
  );
};

export default TooltipEnem

import React from "react";
import { Modal, Backdrop, Fade, Typography } from "@material-ui/core";
import useStyles from "./tootltipEnem.style";

// eslint-disable-next-line react/prop-types
const TooltipEnem = ({ open, onClose }) => {
  const classes = useStyles();
  return (
     <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
          timeout: 300,
        }}
        >
      <Fade in={open}>
        <div className={classes.paper}>
          <Typography className={classes.title}>
            Ei, você Sabia Disso?
          </Typography>
          <Typography className={classes.text}>
            Você pode usar sua <strong>nota do Enem</strong> se fez a prova nos{" "}
            <strong>últimos dez anos</strong>. Se você optar pela inscrição
            através da nota do Enem,{" "}
            <strong>não precisará realizar o vestibular tradicional.</strong>
          </Typography>
        </div>
      </Fade>
    </Modal> 
  )
}

export default TooltipEnem

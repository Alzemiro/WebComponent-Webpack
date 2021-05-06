import React from "react";
import { Styled } from "direflow-component";
import styles from "./tooltip-enem-component.style.css";

// eslint-disable-next-line react/prop-types
const TooltipEnem = ({ open, onClose }) => {
  const showHideClassName = open ? `modal__enem display-block` : `modal__enem display-none`;
  return (
    <Styled styles={styles}>
      <div className={showHideClassName}>
        <section className="modal-main">
        <div className="paper">
        <a onClick={onClose} className="btn__close"></a>
            <div className="title">Ei, você Sabia Disso?</div>
            <div className="text">
              Você pode usar sua <strong>nota do Enem</strong> se fez a prova
              nos <strong>últimos dez anos</strong>. Se você optar pela
              inscrição através da nota do Enem, <strong>não precisará realizar o vestibular tradicional.</strong>
            </div>
          </div>
        </section>
      </div>
    </Styled>
  );
};

export default TooltipEnem;

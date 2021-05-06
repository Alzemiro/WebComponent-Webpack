import React from "react";
import { Styled } from "direflow-component";
import styles from "./tooltip-gatilho-component.style.css";
import Timer from "react-compound-timer";

// eslint-disable-next-line react/prop-types
const TooltipGatilho = () => {
  //   const showHideClassName = true
  //     ? `modal__gatilho display-block`
  //     : `modal__gatilho display-none`;
  return (
    <Styled styles={styles}>
      <div className={"modal__gatilho display-block"}>
        <section className="modal-main">
          <div className="paper">
            <div className="timer__square">
              <Timer
                initialTime={900000}
                direction="backward"
                formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
              >
                {() => (
                  <React.Fragment>
                    <Timer.Minutes />:
                    <Timer.Seconds />
                  </React.Fragment>
                )}
              </Timer>
            </div>
          </div>
        </section>
      </div>
    </Styled>
  );
};

export default TooltipGatilho;

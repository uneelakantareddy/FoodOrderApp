import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="modal__content">{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  const Backdrop = () => {
    return <div className="back-drop"></div>;
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

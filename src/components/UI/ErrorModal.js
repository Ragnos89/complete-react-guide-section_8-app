import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import styles from "./ErrorModal.module.css";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onErrorHandle}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onErrorHandle}>OK</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onErrorHandle={props.onErrorHandle} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onErrorHandle={props.onErrorHandle}
        />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;

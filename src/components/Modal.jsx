import React from "react";
import classes from "./Modal.module.css";

export default function Modal({ children, onToggleModal }) {
  return (
    <div className={classes.backdrop}>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </div>
  );
}

import { createPortal } from "react-dom";
import styles from "./ModalWindow.module.css";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

const ModalWindow = ({ isOpen, children, onClose, newStyles }) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if(isOpen) setVisible(true);
    else {
      const timer = setTimeout(() => setVisible(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible) return null;

  return createPortal(
    <div
      className={`${isOpen ? styles.modal_appear : styles.modal_disappear} ${styles.modal_overlay}`}
      onMouseDown={onClose}
    >
      <div
        className={`${isOpen ? styles.modal_appear : styles.modal_disappear} ${styles.modal_content} ${newStyles}`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById("root"),
  );
};

export default ModalWindow;

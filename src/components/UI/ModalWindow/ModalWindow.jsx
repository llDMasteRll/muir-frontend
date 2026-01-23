import { createPortal } from "react-dom";
import styles from "./ModalWindow.module.css";
import Button from "../Button/Button";

const ModalWindow = ({
  isOpen,
  onClose,
  onConfirm,
  children,
  confirmButtonText = "Confirm",
  closeButtonText = "Cancel",
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modal_overlay} onMouseDown={onClose}>
      <div
        className={styles.modal_content}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
        <div className="container" style={{width: "100%"}}>
          <Button onClick={onConfirm}>{confirmButtonText}</Button>
          <Button onClick={onClose}>{closeButtonText}</Button>
        </div>
      </div>
    </div>,
    document.getElementById("root"),
  );
};

export default ModalWindow;

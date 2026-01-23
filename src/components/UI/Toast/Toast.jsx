import styles from "./Toast.module.css";

const Toast = ({ notification }) => {
  if (!notification) return null;

  return (
    <div>
      {notification && (
        <div
        className={styles.toast}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
};
//
export default Toast;

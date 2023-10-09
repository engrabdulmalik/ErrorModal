import styles from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p> {props.message}</p>
        </div>
        <footer className={styles.footer}>
          <Button onClick={props.onConfirm}>Ok</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;

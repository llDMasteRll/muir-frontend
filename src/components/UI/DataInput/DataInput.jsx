import styles from './DataInput.module.css';

const DataInput = ({placeholder, maxLength = 80}) => {
    return (
        <input className={styles.data_input} type="text" placeholder={placeholder} maxLength={maxLength} />
    );
}

export default DataInput;

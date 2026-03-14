import styles from './DataInput.module.css';

const DataInput = ({type = "text", max, placeholder, maxLength = 80, value, onChange, className}) => {
    return (
        <input className={`${styles.data_input} ${className}`} type={type} max={max} placeholder={placeholder} maxLength={maxLength} value={value} onChange={onChange}/>
    );
}

export default DataInput;

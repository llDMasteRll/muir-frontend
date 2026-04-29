import { useEffect, useState } from "react";
import styles from "./DataInput.module.css";

const isoToDisplay = (value) => {
  if (!value) return "";

  const [year, month, day] = value.split("-");
  if (!year || !month || !day) return "";

  return `${day}.${month}.${year}`;
};

const displayToIso = (value) => {
  const [day, month, year] = value.split(".");
  return `${year}-${month}-${day}`;
};

const applyDateMask = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 8);

  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}.${digits.slice(2)}`;

  return `${digits.slice(0, 2)}.${digits.slice(2, 4)}.${digits.slice(4)}`;
};

const isValidDate = (value) => {
  if (!/^\d{2}\.\d{2}\.\d{4}$/.test(value)) return false;

  const [day, month, year] = value.split(".").map(Number);
  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
};

const DataInput = ({
  type = "text",
  max,
  placeholder,
  maxLength = 80,
  value,
  onChange,
  className = "",
}) => {
  const isDate = type === "date";
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    if (isDate) {
      setDisplayValue(isoToDisplay(value));
    }
  }, [value, isDate]);

  const handleChange = (e) => {
    if (!isDate) {
      onChange?.(e);
      return;
    }

    const maskedValue = applyDateMask(e.target.value);
    setDisplayValue(maskedValue);

    if (isValidDate(maskedValue)) {
      onChange?.({
        target: {
          value: displayToIso(maskedValue),
        },
      });
    }
  };

  return (
    <input
      className={`${styles.data_input} ${className}`}
      type={isDate ? "text" : type}
      inputMode={isDate ? "numeric" : undefined}
      placeholder={isDate ? "dd.mm.yyyy" : placeholder}
      maxLength={isDate ? 10 : maxLength}
      value={isDate ? displayValue : value}
      onChange={handleChange}
      max={max}
    />
  );
};

export default DataInput;
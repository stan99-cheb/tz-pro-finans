import React from "react";
import styles from "./filter.module.css";

type Props = {
  value: { barcode: string; product_brand: string; product_name: string };
  setSearchQuery: React.Dispatch<React.SetStateAction<{
    barcode: string;
    product_brand: string;
    product_name: string;
  }>>;
};

const Filter = ({ value, setSearchQuery }: Props) => {
  return (
    <div
      className={styles.filter}
    >
      <label
        className={styles.label}
      >
        Баркод
        <input
          className={styles.input}
          type="text"
          value={value.barcode}
          onChange={(e) => {
            setSearchQuery(
              (prev) =>
                ({ ...prev, barcode: e.target.value })
            )
          }}
        />
      </label>
      <label
        className={styles.label}
      >
        Производитель
        <input
          className={styles.input}
          type="text"
          value={value.product_brand}
          onChange={(e) => {
            setSearchQuery(
              (prev) =>
                ({ ...prev, product_brand: e.target.value })
            )
          }}
        />
      </label>
      <label
        className={styles.label}
      >
        Наименование
        <input
          className={styles.input}
          type="text"
          value={value.product_name}
          onChange={(e) => {
            setSearchQuery(
              (prev) =>
                ({ ...prev, product_name: e.target.value })
            )
          }}
        />
      </label>
    </div>
  );
}

export default Filter;
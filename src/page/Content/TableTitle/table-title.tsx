import React from "react";
import styles from "./table-title.module.css";

type Props = {
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const TableTitle = ({ onChange }: Props) => {
  return (
    <div
      className={styles.title}
    >
      <p
        className={styles.barcode}
        onClick={() => onChange('barcode')}
      >
        Баркод
      </p>
      <p
        className={styles.product_brand}
        onClick={() => onChange('product_brand')}
      >
        Производитель
      </p>
      <p
        className={styles.product_name}
        onClick={() => onChange('product_name')}
      >
        Наименование
      </p>
      <p
        className={styles.product_quantity}
        onClick={() => onChange('product_quantity')}
      >
        Кол-во
      </p>
      <p
        className={styles.price}
        onClick={() => onChange('price')}
      >
        Цена
      </p>
    </div>
  );
}

export default TableTitle;
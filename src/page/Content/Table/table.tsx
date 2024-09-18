import React from "react";
import { TData } from "../content";
import Item from "../Item/item";
import styles from "./table.module.css";

type Props = {
  data: TData[];
  setData: React.Dispatch<React.SetStateAction<TData[]>>;
};

const Table = ({ data, setData }: Props) => {
  return (
    <ul
      className={styles.list}
    >
      {data.map(
        (item) =>
          <li
            key={item.id.toString()}
            className={styles.item}
          >
            <Item
              item={item}
              onData={(id, property) => {
                setData(
                  (prev) =>
                    prev.map(
                      (item) =>
                        item.id === id ? { ...item, ...property } : item
                    )
                )
              }}
            />
          </li>
      )}
    </ul>
  );
}

export default Table;
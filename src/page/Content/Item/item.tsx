import ChangeElement from "../../../components/ChangeElement/change-element";
import { TData } from "../content";
import styles from "./item.module.css";

type Property = {
  [Key in keyof TData]?: TData[Key];
}

type Props = {
  item: TData;
  onData: (id: TData['id'], property: Property) => void;
};

const Item = ({ item, onData }: Props) => {
  return (
    <>
      <ChangeElement
        extraStyle={styles.barcode}
        property={item.barcode}
        handleBlur={(value: string) => {
          onData(item.id, { barcode: Number(value) });
        }}
      />
      <p
        className={styles.product_brand}
      >
        {item.product_brand}
      </p>
      <p
        className={styles.product_name}
      >
        {item.product_name}
      </p>
      <ChangeElement
        extraStyle={styles.product_quantity}
        property={item.product_quantity}
        handleBlur={(value: string) => {
          onData(item.id, { product_quantity: Number(value) });
        }}
      />
      <ChangeElement
        extraStyle={styles.price}
        property={item.price}
        handleBlur={(value: string) => {
          onData(item.id, { price: Number(value) });
        }}
      />
    </>
  );
}

export default Item;
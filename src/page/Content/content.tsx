import styles from "./content.module.css";
import Data from "../../data/DATA.json";
import React from "react";
import TableTitle from "./TableTitle/table-title";
import Io from "./IO/io";
import Table from "./Table/table";
import Filter from "./Filter/filter";

export type TData = {
  id: number;
  barcode: number;
  product_brand: string;
  product_name: string;
  product_quantity: number;
  price: number;
};

type SearchQuery = {
  barcode: string;
  product_brand: string;
  product_name: string;
};

const Content = () => {
  const [data, setData] = React.useState<TData[]>(Data);
  const [selectedSort, setSelectedsort] = React.useState('barcode');
  const [searchQuery, setSearchQuery] = React.useState<SearchQuery>({
    barcode: '',
    product_brand: '',
    product_name: '',
  });

  const sortedData = React.useMemo(
    () =>
      [...data].sort((a, b) => a[(selectedSort as keyof TData)] > b[selectedSort as keyof TData] ? 1 : -1),
    [data, selectedSort]
  );

  const sortedAndQueryData = React.useMemo(
    () =>
      sortedData.filter(item =>
        (Object.keys(searchQuery) as (keyof SearchQuery)[]).every(
          key =>
            item[key].toString().includes(searchQuery[key])
        )
      ),
    [searchQuery, sortedData]
  );

  return (
    <div
      className={styles.content}
    >
      <Filter
        value={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Io
        exportData={sortedAndQueryData}
        onChangeData={
          (data: TData[]) => {
            setData(data);
          }
        }
      />
      <TableTitle
        onChange={setSelectedsort}
      />
      <Table
        data={sortedAndQueryData}
        setData={setData}
      />
    </div>
  );
}

export default Content;
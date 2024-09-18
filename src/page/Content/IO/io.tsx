import React from "react";
import styles from "./io.module.css";
import { TData } from "../content";

type Props = {
  exportData: TData[];
  onChangeData: (data: TData[]) => void;
};

const Io = ({ exportData, onChangeData }: Props) => {

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target?.files![0], "UTF-8");
    fileReader.onload = (e) => {
      const data = JSON.parse(e.target?.result as string) as TData[];
      onChangeData(data);
    };
  };

  const handleExport = () => {
    const fileName = "data.json";
    const data = new Blob([JSON.stringify(exportData)], { type: "text/json" });
    const jsonURL = window.URL.createObjectURL(data);
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = jsonURL;
    link.setAttribute("download", fileName);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={styles.io}
    >
      <label
        className={styles.label}
      >
        <input type="file" onChange={e => handleImport(e)} />
        <span>Загрузить</span>
      </label>
      <button
        className={styles.button}
        onClick={handleExport}
      >
        Экспорт
      </button>
    </div>
  );
}

export default Io;
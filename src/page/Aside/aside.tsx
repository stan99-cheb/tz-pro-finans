import styles from "./aside.module.css";
import Support from "./Support/support";

const Aside = () => {
  const menu = ["Настройки", "Внесение данных", "Отчеты", "База знаний"];

  return (
    <div
      className={styles.aside}
    >
      <div
        className={styles.menu}
      >
        <h2
          className={styles.title}
        >
          ФИН Контроль
          <button>
            menu
          </button>
        </h2>
        <ul
          className={styles.list}
        >
          {menu.map(
            (item) =>
              <li
                key={item}
              >
                {item}
              </li>
          )}
        </ul>
      </div>
      <Support />
      <button
        className={styles.button}
      >
        Связаться с нами
      </button>
    </div>
  );
}

export default Aside;
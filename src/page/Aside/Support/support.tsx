import styles from "./support.module.css";

const Support = () => {
  return (
    <div
      className={styles.support}
    >
      <h2
        className={styles.title}
      >
        Техническая поддержка
      </h2>
      <div
        className={styles.contacts}
      >
        <div>
          <p>Номер поддержки:</p>
          <a
            className={styles.link}
            href="tel:+79999999999"
          >
            +7 999 999 9999
          </a>
        </div>
        <div>
          <p>Почта поддержки:</p>
          <a
            className={styles.link}
            href="mailto:pf1@werthesest.ru"
          >
            pf1@werthesest.ru
          </a>
        </div>
        <div>
          <p>
            Часы работы:
          </p>
          <p>Пн - Пт с 09:00 до 19:00 мск</p>
        </div>
      </div>
      <a
        className={styles.resource}
      >
        Пользовательское соглашение
      </a>
      <a
        className={styles.resource}
      >
        Политика конфиденциальности
      </a>
      <a
        className={styles.resource}
      >
        Юридическая информация
      </a>
      <a
        className={styles.resource}
      >
        Публичная оферта
      </a>
    </div>
  );
}

export default Support;
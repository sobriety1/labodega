import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.textSide}>
          <span className={styles.eyebrow}>О компании</span>
          <h2 className={styles.title}>
            Мы создаём пространства,<br />
            <em className={styles.titleAccent}>в которых хочется жить.</em>
          </h2>
          <p className={styles.desc}>
            Наша компания объединяет архитектурное бюро и собственное
            производство под одной крышей. Это позволяет контролировать
            каждый этап — от первого эскиза до монтажа готового объекта.
          </p>
          <p className={styles.desc}>
            Мы работаем с жилыми домами, коммерческими объектами
            и модульными конструкциями. За каждым проектом стоит
            команда архитекторов, инженеров и производственников,
            которые говорят на одном языке.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>150+</span>
              <span className={styles.statLabel}>реализованных проектов</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>12</span>
              <span className={styles.statLabel}>лет на рынке</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>40+</span>
              <span className={styles.statLabel}>человек в команде</span>
            </div>
          </div>
        </div>

        <div className={styles.imageSide}>
          <img src="/about.jpg" alt="Команда на производстве" />
        </div>
      </div>
    </section>
  );
}
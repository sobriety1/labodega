import styles from './Benefits.module.css';

const benefits = [
  {
    num: '01',
    title: 'Собственное производство',
    desc: 'Полный контроль качества на всех этапах — от проектирования до изготовления конструкций в нашем цеху.',
  },
  {
    num: '02',
    title: 'Индивидуальный проект',
    desc: 'Каждый объект проектируется под задачу клиента с учётом участка, климата и бюджета.',
  },
  {
    num: '03',
    title: 'Сокращённые сроки',
    desc: 'Параллельное проектирование и производство сокращают путь от идеи до готового объекта в разы.',
  },
  {
    num: '04',
    title: 'Комплексный подход',
    desc: 'Берём на себя всё: архитектуру, конструктив, производство, логистику и монтаж. Один подрядчик от начала до конца.',
  },
];

export default function Benefits() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2 className={styles.title}>
            <em className={styles.titleItalic}>Больше</em> преимуществ
          </h2>
        </div>
        <div className={styles.grid}>
          {benefits.map((b) => (
            <div key={b.num} className={styles.card}>
              <span className={styles.num}>{b.num}</span>
              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={styles.cardDesc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
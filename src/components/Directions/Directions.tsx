import Link from 'next/link';
import styles from './Directions.module.css';

const directions = [
  {
    title: 'Архитектура',
    subtitle: 'Индивидуальное проектирование',
    desc: 'Жилые дома, учебные павильоны, парки — проектируем под участок и задачу клиента',
    image: '/direction-1.jpg',
    href: '/architecture',
  },
  {
    title: 'Производство',
    subtitle: 'Модульные дома и коммерция',
    desc: 'Модульные конструкции, офисы, павильоны — изготавливаем в собственном цеху',
    image: '/direction-2.jpg',
    href: '/production',
  },
  {
    title: 'МАФ',
    subtitle: 'Малые архитектурные формы',
    desc: 'Беседки, навесы, входные группы, ограждения — проектируем и производим',
    image: '/direction-3.jpg',
    href: '/maf',
  },
];

export default function Directions() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Направления</span>
        <h2 className={styles.title}>Что мы создаём</h2>
      </div>
      <div className={styles.grid}>
        {directions.map((d) => (
          <Link key={d.title} href={d.href} className={styles.card}>
            <div className={styles.cardImage}>
              <img src={d.image} alt={d.title} />
              <div className={styles.cardOverlay} />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardSubtitle}>{d.subtitle}</span>
              <h3 className={styles.cardTitle}>{d.title}</h3>
              <p className={styles.cardDesc}>{d.desc}</p>
              <span className={styles.cardLink}>
                Подробнее
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
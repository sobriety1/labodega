'use client';

import styles from './Nav.module.css';

interface NavProps {
  onContactClick: () => void;
}

export default function Nav({ onContactClick }: NavProps) {
  return (
    <>
      <div className={styles.logoWrap}>
        <img src="/logo.png" alt="Логотип" className={styles.logoImg} />
      </div>
      <nav className={styles.nav}>
        <div className={styles.links}>
          <button className={styles.link}>Проекты</button>
          <button className={styles.link}>Как мы строим</button>
          <button className={styles.link}>О компании</button>
          <button
            className={`${styles.link} ${styles.primary}`}
            onClick={onContactClick}
          >
            Обсудить проект
          </button>
        </div>
      </nav>
    </>
  );
}
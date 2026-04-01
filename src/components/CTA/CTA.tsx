'use client';

import styles from './CTA.module.css';

interface CTAProps {
  onContactClick: () => void;
}

export default function CTA({ onContactClick }: CTAProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Начнём сотрудничество</span>
        <h2 className={styles.title}>
          Есть проект или идея?<br />
          <em className={styles.titleAccent}>Давайте обсудим.</em>
        </h2>
        <p className={styles.desc}>
          Расскажите о вашей задаче — мы предложим решение,
          сроки и стоимость. Первая консультация бесплатно.
        </p>
        <button className={styles.btn} onClick={onContactClick}>
          Обсудить проект
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </button>
      </div>
    </section>
  );
}
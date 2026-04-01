'use client';

import styles from './Hero.module.css';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.videoBg}>
        <video autoPlay muted loop playsInline preload="auto" className={styles.video}>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.overlayBottom} />
      <div className={styles.overlayLeft} />
      <div className={styles.overlayTop} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>Архитектурно-производственная компания</div>
        <h1 className={styles.title}>
          Архитектура<br />
          <em className={styles.titleItalic}>без компромиссов.</em>
        </h1>
        <p className={styles.subtitle}>
          Проектируем, производим и строим. Жилые дома, модульные
          конструкции, коммерческие объекты — от эскиза до сдачи под ключ.
        </p>
        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={onContactClick}>
            Обсудить проект
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </button>
          <button className={styles.btnSecondary}>
            Смотреть проекты
          </button>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <div className={styles.scrollText}>Листайте</div>
      </div>
    </section>
  );
}
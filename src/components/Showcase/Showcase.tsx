'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Showcase.module.css';

export default function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollable = sectionRef.current.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const p = Math.max(0, Math.min(1, -rect.top / scrollable));
      setProgress(p);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Image slides from left (0%) to right (50%)
  const imageX = progress * 50;
  // Right text fades out in first half
  const rightOpacity = Math.max(0, 1 - progress * 3);
  // Left text fades in in second half
  const leftOpacity = Math.max(0, (progress - 0.4) * 2.5);
  const leftY = Math.max(0, (1 - leftOpacity) * 30);

   if (isMobile) {
    return (
      <section className={styles.mobileSection}>
        <div className={styles.mobileTextTop}>
          <h2 className={styles.title}>Строительство, превосходящее ожидания.</h2>
        </div>
        <img src="/showcase.jpg" alt="Интерьер" className={styles.mobileImage} />
        <div className={styles.mobileTextBottom}>
          <h2 className={styles.title}>Современный дизайн<br />без компромиссов.</h2>
          <p className={styles.description}>
            Мы объединяем архитектурное проектирование и собственное
            производство, чтобы создавать пространства, в которых
            хочется жить. Каждый проект — индивидуальный подход
            к материалам, планировке и деталям.
          </p>
        </div>
      </section>
    );
  }

  return (
    <div className={styles.outer} ref={sectionRef}>
      <div className={styles.sticky}>
       {/* Image */}
        <div
          className={styles.imageWrap}
          style={{ clipPath: `inset(0 ${100 - (progress * 50 + 50)}% 0 ${progress * 50}%)` }}
        >
          <img src="/showcase.jpg" alt="Интерьер модульного дома" />
        </div>

         {/* Right text — stays under image */}
        <div className={styles.textRight}>
          <h2 className={styles.title}>Строительство, <br />превосходящее ожидания.</h2>
        </div>

        {/* Left text — fades in */}
        <div
          className={styles.textLeft}
          style={{
            opacity: leftOpacity,
            transform: `translateY(${leftY}px)`,
          }}
        >
          <h2 className={styles.title}>Современный дизайн<br />без компромиссов.</h2>
          <p className={styles.description}>
            Мы объединяем архитектурное проектирование и собственное
            производство, чтобы создавать пространства, в которых
            хочется жить. Каждый проект — индивидуальный подход
            к материалам, планировке и деталям.
          </p>
        </div>
      </div>
    </div>
  );
}
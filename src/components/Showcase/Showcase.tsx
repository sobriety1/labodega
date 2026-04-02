'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Showcase.module.css';

export default function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textLeftRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current || !imageRef.current || !textLeftRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollable = sectionRef.current.offsetHeight - window.innerHeight;
        if (scrollable <= 0) return;

        const progress = Math.max(0, Math.min(1, -rect.top / scrollable));

        // Update DOM directly — no React re-render
        const clipRight = 100 - (progress * 50 + 50);
        const clipLeft = progress * 50;
        imageRef.current.style.clipPath = `inset(0 ${clipRight}% 0 ${clipLeft}%)`;

        const leftOpacity = Math.max(0, (progress - 0.4) * 2.5);
        const leftY = Math.max(0, (1 - leftOpacity) * 30);
        textLeftRef.current.style.opacity = String(leftOpacity);
        textLeftRef.current.style.transform = `translateY(${leftY}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <section id="projects" className={styles.mobileSection}>
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
    <div id="projects" className={styles.outer} ref={sectionRef}>
      <div className={styles.sticky}>
        {/* Image */}
        <div
          ref={imageRef}
          className={styles.imageWrap}
          style={{ clipPath: 'inset(0 50% 0 0%)' }}
        >
          <img src="/showcase.jpg" alt="Интерьер модульного дома" />
        </div>

        {/* Right text — stays under image */}
        <div className={styles.textRight}>
          <h2 className={styles.title}>Строительство, <br />превосходящее ожидания.</h2>
        </div>

        {/* Left text — fades in */}
        <div
          ref={textLeftRef}
          className={styles.textLeft}
          style={{ opacity: 0, transform: 'translateY(30px)' }}
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
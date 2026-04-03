'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import styles from './Showcase.module.css';

export default function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
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
        if (!sectionRef.current || !windowRef.current || !imageRef.current || !textLeftRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollable = sectionRef.current.offsetHeight - window.innerHeight;
        if (scrollable <= 0) return;

        const progress = Math.max(0, Math.min(1, -rect.top / scrollable));

        // Update DOM directly — using hardware-accelerated transform instead of clip-path
        const windowTranslate = progress * 100;
        const imageTranslate = -(progress * 50);
        
        windowRef.current.style.transform = `translate3d(${windowTranslate}%, 0, 0)`;
        imageRef.current.style.transform = `translate3d(${imageTranslate}%, 0, 0)`;

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
        <Image src="/showcase.jpg" alt="Интерьер" width={1200} height={800} className={styles.mobileImage} sizes="100vw" />

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
        <div className={styles.imageWrap}>
          <div 
            ref={windowRef} 
            className={styles.imageWindow}
          >
            <div ref={imageRef} className={styles.imageInner}>
              <Image src="/showcase.jpg" alt="Интерьер модульного дома" fill sizes="100vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
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
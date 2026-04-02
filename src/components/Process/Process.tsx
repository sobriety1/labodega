'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Process.module.css';

const steps = [
  {
    label: 'Консультация',
    desc: 'Обсуждаем вашу задачу, участок и пожелания',
    image: '/process-1.jpg',
  },
  {
    label: 'Проектирование',
    desc: 'Разрабатываем архитектурное решение под ваши цели',
    image: '/process-2.jpg',
  },
  {
    label: 'Согласование',
    desc: 'Утверждаем проект, материалы и сроки',
    image: '/process-3.jpg',
  },
  {
    label: 'Производство',
    desc: 'Изготавливаем конструкции в собственном цеху',
    image: '/process-4.jpg',
  },
  {
    label: 'Готовый объект',
    desc: 'Доставляем, монтируем и сдаём под ключ',
    image: '/process-5.webp',
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const outerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);

 useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!outerRef.current) return;
        const rect = outerRef.current.getBoundingClientRect();
        const scrollableHeight = outerRef.current.offsetHeight - window.innerHeight;
        if (scrollableHeight <= 0) return;

        const progress = Math.max(0, Math.min(1, -rect.top / scrollableHeight));
        const newActive = Math.min(
          steps.length - 1,
          Math.floor(progress * steps.length)
        );
        if (newActive !== activeRef.current) {
          activeRef.current = newActive;
          setActive(newActive);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="process">
      <h2 className={styles.heading}>
        Оптимизированный процесс.
        <br />
        <span className={styles.headingAccent}>Долговечный результат.</span>
      </h2>
      <div className={styles.outer} ref={outerRef}>
        <div className={styles.sticky}>
          <div className={styles.inner}>
            {/* Left — steps */}
            <div className={styles.stepsWrap}>
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`${styles.step} ${active === i ? styles.stepActive : ''}`}
                >
                  <span className={styles.stepLabel}>{step.label}</span>
                  {active === i && (
                    <span className={styles.stepDesc}>{step.desc}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Right — image */}
            <div className={styles.imageWrap}>
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`${styles.image} ${active === i ? styles.imageActive : ''}`}
                >
                  <img src={step.image} alt={step.label} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
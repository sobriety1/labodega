'use client';

import { useState, useEffect } from 'react';
import styles from './Nav.module.css';
import { stopScroll, startScroll } from '@/components/SmoothScroll/SmoothScroll';

interface NavProps {
  onContactClick: () => void;
}

export default function Nav({ onContactClick }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      stopScroll();
      document.body.style.overflow = 'hidden';
    } else {
      startScroll();
      document.body.style.overflow = '';
    }
    return () => {
      startScroll();
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className={styles.logoWrap}>
        <img src="/logo.png" alt="Логотип" className={styles.logoImg} />
      </div>

      {isMobile ? (
        <>
          <div className={styles.mobileBar}>
            <button
              className={`${styles.link} ${styles.primary}`}
              onClick={() => { setMenuOpen(false); onContactClick(); }}
            >
              Обсудить проект
            </button>
            <button
              className={styles.burger}
              onClick={() => setMenuOpen(true)}
            >
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
            </button>
          </div>

          <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
            <button
              className={styles.closeBtn}
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
            <nav className={styles.mobileNav}>
              <a href="#projects" className={styles.mobileLink} onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>Проекты</a>
              <a href="#process" className={styles.mobileLink} onClick={(e) => { e.preventDefault(); scrollTo('process'); }}>Как мы строим</a>
              <a href="#about" className={styles.mobileLink} onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>О компании</a>
            </nav>
            <button
              className={styles.mobileCtaBottom}
              onClick={() => { setMenuOpen(false); onContactClick(); }}
            >
              Обсудить проект
            </button>
          </div>
        </>
      ) : (
        <nav className={styles.nav}>
          <div className={styles.links}>
            <button className={styles.link} onClick={() => scrollTo('projects')}>Проекты</button>
            <button className={styles.link} onClick={() => scrollTo('process')}>Как мы строим</button>
            <button className={styles.link} onClick={() => scrollTo('about')}>О компании</button>
            <button
              className={`${styles.link} ${styles.primary}`}
              onClick={onContactClick}
            >
              Обсудить проект
            </button>
          </div>
        </nav>
      )}
    </>
  );
}
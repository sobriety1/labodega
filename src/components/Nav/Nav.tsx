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
              <a href="#" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Проекты</a>
              <a href="#" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Как мы строим</a>
              <a href="#" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>О компании</a>
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
      )}
    </>
  );
}
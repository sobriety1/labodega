'use client';

import { useEffect } from 'react';
import styles from './ContactModal.module.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.active : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>
          &#10005;
        </button>
        <div className={styles.title}>Обсудить проект</div>
        <div className={styles.subtitle}>
          Оставьте контакт — перезвоним в течение 30 минут
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Имя</label>
          <input className={styles.input} placeholder="Как к вам обращаться?" />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Телефон</label>
          <input className={styles.input} placeholder="+7 (___) ___-__-__" />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Комментарий</label>
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            placeholder="Расскажите о вашем проекте (необязательно)"
          />
        </div>
        <button className={styles.submit}>Отправить заявку</button>
      </div>
    </div>
  );
}

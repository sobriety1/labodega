import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          {/* Logo & desc */}
          <div className={styles.brand}>
            <div className={styles.logo}>BODEGA</div>
            <p className={styles.brandDesc}>
              Архитектурно-производственная компания.
              Проектируем, производим и строим под ключ.
            </p>
          </div>

          {/* Nav columns */}
          <div className={styles.columns}>
            <div className={styles.column}>
              <span className={styles.columnTitle}>Направления</span>
              <Link href="/architecture" className={styles.link}>Архитектура</Link>
              <Link href="/production" className={styles.link}>Производство</Link>
              <Link href="/maf" className={styles.link}>Малые архитектурные формы</Link>
            </div>
            <div className={styles.column}>
              <span className={styles.columnTitle}>Компания</span>
              <Link href="/#process" className={styles.link}>Как мы работаем</Link>
              <Link href="/#about" className={styles.link}>О компании</Link>
              <Link href="/#projects" className={styles.link}>Проекты</Link>
            </div>
            <div className={styles.column}>
              <span className={styles.columnTitle}>Контакты</span>
              <a href="tel:+79001234567" className={styles.link}>+7 (900) 123-45-67</a>
              <a href="mailto:info@bodega.ru" className={styles.link}>info@bodega.ru</a>
              <span className={styles.link}>г. Город, ул. Улица, 1</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>© 2026 BODEGA. Все права защищены.</span>
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>Политика конфиденциальности</Link>
            <Link href="/terms" className={styles.bottomLink}>Пользовательское соглашение</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
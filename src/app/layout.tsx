import type { Metadata } from 'next';
import '@/styles/globals.css';
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';

export const metadata: Metadata = {
  title: 'LA BODEGA — Архитектурное бюро | Проектирование и реализация',
  description: 'Создаем вневременную архитектуру и интерьеры, объединяя инновационные инженерные решения с эстетикой минимализма. Индивидуальный подход к каждому пространству.',
  openGraph: {
    title: 'LA BODEGA — Архитектурное бюро',
    description: 'Проектирование и реализация премиальных архитектурных объектов. От концепции до финального штриха.',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Не забудь положить сюда сочный рендер, если есть
        width: 1200,
        height: 630,
        alt: 'LA BODEGA Architecture',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico', // Убедись, что сменил логотип Next.js на свой
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        {/* Добавляем темную тему для прелоадера браузеров, чтобы не было белой вспышки */}
        <meta name="theme-color" content="#000000" />
      </head>
      <body style={{ backgroundColor: '#000000' }}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
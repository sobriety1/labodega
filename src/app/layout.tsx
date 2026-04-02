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
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'LA BODEGA Architecture',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico', 
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
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
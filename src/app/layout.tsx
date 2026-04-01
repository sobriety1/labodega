import type { Metadata } from 'next';
import '@/styles/globals.css';
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';

export const metadata: Metadata = {
  title: 'МодульДом — Модульные дома премиум-класса',
  description: 'Проектируем и производим быстровозводимые модульные дома. Заводское качество, индивидуальный проект, полная готовность к жизни за 45 дней.',
  openGraph: {
    title: 'МодульДом — Модульные дома премиум-класса',
    description: 'Быстровозводимые модульные дома нового поколения. От заявки до заселения — 45 дней.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trafficmore.ru"),
  title: {
    default: "Neuro Marketing — Авитологи с опытом",
    template: "%s | Neuro Marketing",
  },
  applicationName: "Neuro Marketing",
  description:
    "Комплексное продвижение бизнеса на Авито: аудит, запуск, ведение и масштабирование с фокусом на лиды и продажи.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "Neuro Marketing — Авитологи с опытом",
    description:
      "Получайте больше клиентов с Авито уже сейчас. Тарифы под разные задачи: аудит, запуск и ведение под ключ.",
    url: "/",
    siteName: "Neuro Marketing",
    images: [
      {
        url: "/neuro-logo.png",
        width: 1200,
        height: 1200,
        alt: "Логотип Neuro Marketing",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuro Marketing — Авитологи с опытом",
    description:
      "Получайте больше клиентов с Авито уже сейчас. Аудит, запуск и ведение под ключ.",
    images: ["/neuro-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

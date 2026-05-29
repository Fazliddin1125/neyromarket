import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lead-key.ru"),
  title: {
    default: "Lead-Key — продвижение бизнеса на Авито под ключ",
    template: "%s | Lead-Key",
  },
  applicationName: "Lead-Key",
  description:
    "Профессиональное продвижение бизнеса на Авито: аудит, упаковка, ключевые слова, дизайн и ведение аккаунта под ключ. Официальный партнёр Avito.",
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
    title: "Lead-Key — продвижение бизнеса на Авито под ключ",
    description:
      "Полный цикл ведения аккаунта на Авито: от настроек до лидов. Увеличим продажи в 1,5–4 раза. Официальный партнёр Avito.",
    url: "/",
    siteName: "Lead-Key",
    images: [
      {
        url: "/neuro-logo.png",
        width: 1200,
        height: 1200,
        alt: "Lead-Key",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead-Key — продвижение бизнеса на Авито под ключ",
    description:
      "Полный цикл ведения аккаунта на Авито: от настроек до лидов. Официальный партнёр Avito.",
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

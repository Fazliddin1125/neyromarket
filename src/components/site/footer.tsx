import Link from "next/link";
import { KeyRound, Phone } from "lucide-react";

const columns = [
  {
    title: "Услуги",
    links: [
      { href: "#services", label: "Продвижение под ключ" },
      { href: "#process", label: "Этапы работы" },
      { href: "#pricing", label: "Тарифы" },
    ],
  },
  {
    title: "Компания",
    links: [
      { href: "#contact", label: "Контакты" },
      { href: "#services", label: "О нас" },
      { href: "#contact", label: "Бесплатный аудит" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]/40">
      <div className="container-shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="#top" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[var(--brand-indigo)] to-[var(--brand-cyan)] text-white">
                <KeyRound size={18} />
              </span>
              <span className="text-lg font-black tracking-tight">
                Lead-<span className="text-gradient">Key</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-[var(--muted)]">
              Профессиональное продвижение бизнеса на Авито под ключ. Официальный
              партнёр Avito — от настроек до лидов.
            </p>
            <a
              href="tel:+79150577973"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--foreground)]"
            >
              <Phone size={16} className="text-[var(--brand-violet)]" />
              +7 915 057 79 73
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold text-[var(--foreground)]">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] sm:flex-row">
          <p>© 2026 Lead-Key. Все права защищены.</p>
          <p>Продвижение бизнеса на Авито под ключ</p>
        </div>
      </div>
    </footer>
  );
}

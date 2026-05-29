"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Этапы" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#contact", label: "Контакты" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-shell flex h-16 items-center justify-between gap-4">
        <Link href="#top" className="flex items-center gap-3">
          <span className="relative grid h-11 w-11 shrink-0 place-items-center">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--brand-indigo)]/40 to-[var(--brand-cyan)]/30 blur-md" />
            <Image
              src="/neuro-logo.png"
              alt="Лаборатория Нейромаркетинг"
              width={578}
              height={432}
              className="relative h-11 w-auto object-contain drop-shadow-[0_2px_10px_rgba(109,93,252,0.45)]"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Лаборатория
            </span>
            <span className="text-base font-black tracking-tight">
              Нейро<span className="text-gradient">маркетинг</span>
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="#contact" className="btn-primary hidden md:inline-flex">
            Получить аудит
          </Link>
          <button
            type="button"
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--border)] bg-white/5 text-[var(--foreground)] md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-xl md:hidden">
          <div className="container-shell flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-white/5 hover:text-[var(--foreground)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Получить аудит
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

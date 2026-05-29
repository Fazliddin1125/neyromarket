"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

type Status = "idle" | "loading" | "success" | "error";

const perks = [
  "Бесплатный аудит размещения на Авито",
  "Расчёт стоимости лида под вашу нишу",
  "Стратегия запуска и первые заказы за 5 дней",
];

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Не удалось отправить заявку");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Произошла ошибка");
    }
  }

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="container-shell">
        <div className="card-glow overflow-hidden p-1">
          <div className="grid gap-10 rounded-[15px] bg-[var(--surface)] p-7 md:p-12 lg:grid-cols-2">
            {/* Left: pitch */}
            <Reveal>
              <div>
                <span className="eyebrow">Заявка</span>
                <h2 className="section-title mt-5">
                  Напишите нам и получите{" "}
                  <span className="text-gradient">аудит размещения</span> в
                  подарок
                </h2>
                <p className="mt-4 text-[var(--muted)] md:text-lg">
                  Оставьте контакты — эксперт свяжется с вами, разберёт ваш
                  аккаунт на Авито и подготовит стратегию продвижения под ключ.
                </p>

                <ul className="mt-7 space-y-3">
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3 text-sm">
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-[var(--brand-cyan)]"
                      />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-3 text-[var(--muted)]">
                  <Phone size={18} className="text-[var(--brand-violet)]" />
                  <a
                    href="tel:+79150577973"
                    className="text-xl font-black text-[var(--foreground)]"
                  >
                    +7 915 057 79 73
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={0.1}>
              {status === "success" ? (
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-8 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-[var(--brand-cyan)]/15 text-[var(--brand-cyan)]">
                    <CheckCircle2 size={32} />
                  </span>
                  <h3 className="mt-5 text-2xl font-black">Заявка отправлена!</h3>
                  <p className="mt-2 text-[var(--muted)]">
                    Мы свяжемся с вами в течение ~40 минут в рабочее время.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="btn-outline mt-6"
                  >
                    Отправить ещё одну
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="relative">
                    <User
                      size={18}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted)]"
                    />
                    <input
                      name="name"
                      required
                      placeholder="Ваше имя"
                      autoComplete="name"
                      className="field pl-11"
                    />
                  </div>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted)]"
                    />
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="Телефон"
                      autoComplete="tel"
                      className="field pl-11"
                    />
                  </div>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted)]"
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Email (необязательно)"
                      autoComplete="email"
                      className="field pl-11"
                    />
                  </div>

                  <div className="relative">
                    <MessageSquare
                      size={18}
                      className="pointer-events-none absolute left-3.5 top-4 text-[var(--muted)]"
                    />
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Расскажите о задаче (необязательно)"
                      className="field resize-none pl-11"
                    />
                  </div>

                  <label className="flex items-start gap-2 text-xs text-[var(--muted)]">
                    <input
                      type="checkbox"
                      required
                      className="mt-0.5 accent-[var(--brand-indigo)]"
                    />
                    Нажимая кнопку, я соглашаюсь с обработкой персональных данных и
                    политикой конфиденциальности.
                  </label>

                  {status === "error" && (
                    <p className="text-sm font-medium text-[var(--brand-violet)]">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Отправляем…
                      </>
                    ) : (
                      "Получить расчёт"
                    )}
                  </button>

                  <p className="flex items-center justify-center gap-1.5 text-xs text-[var(--muted)]">
                    <ShieldCheck size={14} className="text-[var(--brand-cyan)]" />
                    Никакого спама. Только по делу.
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

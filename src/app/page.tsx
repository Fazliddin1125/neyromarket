import type { Metadata } from "next";
import { TriangleAlert } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Features } from "@/components/site/features";
import { Pricing } from "@/components/site/pricing";
import { LeadForm } from "@/components/site/lead-form";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/reveal";

const problems = [
  "Блокировки объявлений и аккаунта",
  "Конкуренты всегда выше в поиске",
  "Плохо проработаны ключевые слова",
  "Нет чёткой стратегии продвижения",
  "Нерационально расходуется бюджет",
  "Слабый текст объявлений",
  "Изображения не цепляют аудиторию",
  "Неверно настроен масспостинг",
  "Не ведётся работа над рейтингом",
];

const steps = [
  { title: "Знакомство", text: "Обсуждаем ваш бизнес, цели и текущую ситуацию на Авито." },
  { title: "Анализ", text: "Аудит ниши, конкурентов и поисковой выдачи по вашим запросам." },
  { title: "Разработка стратегии", text: "Готовим план продвижения, ключи и офферы под вашу аудиторию." },
  { title: "Дизайн", text: "Создаём цепляющие объявления, баннеры и продающие тексты." },
  { title: "Запуск!", text: "Запускаем кампанию и масспостинг — первые заказы уже за 5 дней." },
];

export const metadata: Metadata = {
  title: "Lead-Key — продвижение бизнеса на Авито под ключ",
  description:
    "Профессиональное продвижение бизнеса на Авито: аудит, упаковка, ключевые слова, дизайн и ведение аккаунта под ключ. Официальный партнёр Avito. Увеличим продажи в 1,5–4 раза.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />

        {/* Problems we solve */}
        <section className="relative py-20 md:py-28">
          <div className="container-shell">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <span className="eyebrow">Проблемы</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="section-title mt-5">
                  Что мешает продажам на{" "}
                  <span className="text-gradient">Авито</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-4 text-[var(--muted)] md:text-lg">
                  Самостоятельное продвижение часто упирается в одни и те же
                  ошибки. Мы знаем, как их закрыть.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((problem, i) => (
                <Reveal key={problem} delay={(i % 3) * 0.05}>
                  <article className="card flex h-full items-start gap-3 p-5">
                    <TriangleAlert
                      size={18}
                      className="mt-0.5 shrink-0 text-[var(--brand-violet)]"
                    />
                    <p className="text-sm text-[var(--foreground)]/90">
                      {problem}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Features />

        {/* Process / 5-day steps */}
        <section id="process" className="relative py-20 md:py-28">
          <div className="container-shell">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <span className="eyebrow">Этапы</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="section-title mt-5">
                  Как мы работаем за{" "}
                  <span className="text-gradient">5 дней</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-4 text-[var(--muted)] md:text-lg">
                  Прозрачный процесс от первого касания до первых заказов.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.06}>
                  <article className="card h-full p-5">
                    <span className="text-3xl font-black text-gradient">
                      0{i + 1}
                    </span>
                    <h3 className="mt-3 text-base font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {step.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Pricing />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}

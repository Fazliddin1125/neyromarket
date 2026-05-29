import {
  Image as ImageIcon,
  LineChart,
  PenLine,
  Search,
  Settings2,
  Star,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const features = [
  {
    icon: Settings2,
    title: "Настройка и упаковка аккаунта",
    text: "Профессионально оформляем профиль и объявления, выстраиваем структуру под продажи.",
  },
  {
    icon: Search,
    title: "Сбор ключей и анализ конкурентов",
    text: "Прорабатываем ключевые слова и поисковую выдачу, чтобы вы были выше конкурентов.",
  },
  {
    icon: PenLine,
    title: "Продающие тексты объявлений",
    text: "Пишем офферы, которые цепляют целевую аудиторию и приводят к заявкам.",
  },
  {
    icon: ImageIcon,
    title: "Дизайн объявлений и баннеров",
    text: "Создаём цепляющие изображения, которые выделяют вас в ленте и повышают CTR.",
  },
  {
    icon: LineChart,
    title: "Запуск и масспостинг",
    text: "Грамотно настраиваем массовое размещение и запускаем продвижение без блокировок.",
  },
  {
    icon: Star,
    title: "Ведение и отчётность 30 дней",
    text: "Сопровождаем аккаунт, работаем над рейтингом и присылаем отчёт каждую неделю.",
  },
];

export function Features() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Услуги</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="section-title mt-5">
              Что входит в{" "}
              <span className="text-gradient">продвижение под ключ</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-[var(--muted)] md:text-lg">
              Берём на себя весь цикл работы с Авито — вы получаете готовый поток
              заявок и растущие продажи.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={(i % 3) * 0.06}>
                <article className="card group h-full p-6 transition-colors hover:border-[var(--brand-indigo)]/60">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--brand-indigo)]/20 to-[var(--brand-cyan)]/20 text-[var(--brand-cyan)] transition group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {feature.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

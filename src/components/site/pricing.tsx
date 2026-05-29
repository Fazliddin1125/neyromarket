import Link from "next/link";
import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Старт",
    price: "от 30 000 ₽",
    period: "/ мес",
    description: "Запуск аккаунта и первые стабильные заявки с Авито.",
    features: [
      "Аудит и упаковка аккаунта",
      "Сбор ключевых слов",
      "Настройка и запуск объявлений",
      "Базовый дизайн объявлений",
      "Отчётность раз в неделю",
    ],
  },
  {
    name: "Под ключ",
    price: "от 60 000 ₽",
    period: "/ мес",
    description: "Полный цикл ведения и рост объёма заявок.",
    popular: true,
    features: [
      "Всё из тарифа «Старт»",
      "Продающие тексты и креативы",
      "Анализ конкурентов и стратегия",
      "Масспостинг и работа с рейтингом",
      "Ведение и оптимизация 30 дней",
      "Скорость ответа в чате ~40 минут",
    ],
  },
  {
    name: "Максимум",
    price: "По запросу",
    period: "",
    description: "Системные продажи и максимальная отдача под ваш бизнес.",
    features: [
      "Всё из тарифа «Под ключ»",
      "Персональный менеджер проекта",
      "Прямая поддержка как партнёра Avito",
      "Снижение стоимости лида до −30%",
      "Регулярный growth-подход",
      "Подключение к текущему кабинету",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Тарифы</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="section-title mt-5">
              Прозрачные цены <span className="text-gradient">без скрытых платежей</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-[var(--muted)] md:text-lg">
              Выберите план под объём заявок. Можно сменить тариф в любой момент.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <article
                className={`relative flex h-full flex-col p-7 ${
                  plan.popular
                    ? "card-glow lg:-translate-y-3 lg:scale-[1.02]"
                    : "card"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--brand-indigo)] to-[var(--brand-violet)] px-4 py-1 text-xs font-bold text-white">
                    Популярный
                  </span>
                )}

                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {plan.description}
                </p>

                <div className="mt-5 flex items-end gap-1">
                  <span className="text-4xl font-black tracking-tight">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="pb-1 text-sm text-[var(--muted)]">
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul className="mt-6 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0 text-[var(--brand-cyan)]"
                      />
                      <span className="text-[var(--foreground)]/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className={`mt-8 w-full ${
                    plan.popular ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {plan.price === "По запросу" ? "Связаться" : "Выбрать тариф"}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

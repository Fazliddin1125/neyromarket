import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  CircleCheckBig,
  Menu,
  Phone,
  Star,
} from "lucide-react";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";

const topStats = [
  { value: 10, suffix: "+", label: "лет опыта" },
  { value: 200, suffix: "+", label: "проектов" },
  { value: 50, suffix: "+", label: "экспертов" },
  { value: 90, suffix: "%", label: "продолжают работу" },
];

const serviceCards = [
  "Мы умеем в Авито с 2015 года",
  "Работаем под KPI и прозрачную аналитику",
  "Запускаем быстро и масштабируем системно",
];

const steps = [
  "Бриф и цели",
  "Аудит ниши",
  "Сбор ключей",
  "Офферы",
  "Креативы",
  "Запуск",
  "Оптимизация",
  "Масштаб",
];

const tariffs = [
  {
    title: "Базовый",
    price: "от 30 000 ₽",
    description: "Для теста и первых стабильных лидов.",
    features: [
      "Аудит и структура аккаунта",
      "Запуск объявлений и продвижения",
      "Отчет по KPI каждую неделю",
    ],
    color: "from-[#57b9ff] to-[#4d74ff]",
  },
  {
    title: "Оптимум",
    price: "от 60 000 ₽",
    description: "Для роста объема заявок и масштабирования.",
    features: [
      "Полная упаковка кабинета",
      "Креативы и тест гипотез",
      "Регулярная оптимизация CPL",
    ],
    color: "from-[#7d6fff] to-[#b063ff]",
  },
  {
    title: "Максимум",
    price: "от 90 000 ₽",
    description: "Для системных продаж и максимальной отдачи.",
    features: [
      "Сквозная аналитика и CRM",
      "Постоянный growth-подход",
      "Команда под ключ на проект",
    ],
    color: "from-[#ff789f] to-[#ff5f73]",
  },
];

const cases = [
  "Промышленное оборудование",
  "Юридические услуги",
  "Строительство и ремонт",
  "Автосервис",
];

const team = [
  "Руководитель отдела продаж",
  "Персональный авитолог",
  "Дизайнер креативов",
  "Контент-менеджер",
];

const faq = [
  "Когда ждать первые лиды после запуска рекламы?",
  "Какой бюджет нужен для старта в моей нише?",
  "Можно ли подключить вашу команду к текущему кабинету?",
  "Что будет, если текущие объявления не работают?",
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Lead Key — продвижение на Авито",
    description:
      "Профессиональное продвижение бизнеса на Авито под ключ.",
  };
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col pb-16">
      <section className="bg-[#1fa3e6] pb-8 pt-4 md:pb-10 md:pt-6">
        <div className="container-shell">
          <header className="rounded-2xl bg-white/95 px-4 py-2 shadow-[0_10px_30px_rgba(20,72,122,0.2)] md:px-7 md:py-3">
            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/neuro-logo.png" alt="Логотип" width={40} height={40} className="h-9 w-9 object-contain" priority />
                <p className="text-sm font-black leading-none text-[#111] md:text-base">NEURON MERKAT</p>
              </Link>
              <nav className="hidden items-center gap-7 text-sm font-semibold text-[#1d1f27] md:flex">
                <Link href="#about">О нас</Link>
                <Link href="#cases">Кейсы</Link>
                <Link href="#contact">Отзывы</Link>
                <Link href="#tariffs">Тарифы</Link>
                <Link href="#work">Работа</Link>
                <Link href="#about">Дизайн</Link>
              </nav>
              <Link href="#contact" className="hidden rounded-full bg-[#1fa3e6] px-6 py-2 font-bold text-white md:inline-flex">
                Оставить заявку
              </Link>
              <details className="group relative md:hidden">
                <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-[#d7def8] bg-white text-[#1b213f]">
                  <Menu size={20} />
                </summary>
              </details>
            </div>
          </header>

          <article className="relative mt-4 overflow-hidden rounded-[28px] border border-[#7fd0f4] bg-[#1fa3e6]">
            <div className="grid min-h-[470px] md:min-h-[520px] md:grid-cols-[1fr_0.9fr]">
              <div className="relative z-10 px-5 py-8 sm:px-8 md:px-10 md:py-10">
                <Reveal>
                  <h1 className="max-w-xl text-[46px] font-black leading-[1.02] text-[#e9f5f4] md:text-[68px]">
                    Получайте больше
                    <br />
                    клиентов с Авито
                    <br />
                    уже сейчас!
                  </h1>
                </Reveal>
                <Reveal delay={0.06}>
                  <p className="mt-5 text-2xl text-[#d9eef5] md:text-[38px]">
                    Разбор рекламной кампании <b className="underline">бесплатно</b>
                  </p>
                </Reveal>
                <Reveal delay={0.12}>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link href="#contact" className="inline-flex min-w-[220px] items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-[#111]">
                      Оставить заявку
                    </Link>
                  </div>
                </Reveal>
              </div>
            <div className="relative min-h-[260px] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#8fe0ff66_0%,transparent_45%),radial-gradient(circle_at_80%_70%,#c8a8ff66_0%,transparent_45%)]" />
              <div className="absolute left-[10%] top-[12%] h-28 w-28 animate-[floatY_8s_ease-in-out_infinite] rounded-3xl bg-white/20 backdrop-blur-sm md:h-36 md:w-36" />
              <div className="absolute left-[36%] top-[8%] h-44 w-44 animate-[floatY_10s_ease-in-out_infinite] rounded-full border border-white/45 bg-white/12 md:h-56 md:w-56" />
              <div className="absolute right-[12%] top-[18%] h-24 w-24 animate-[floatY_9s_ease-in-out_infinite] rounded-2xl border border-white/45 bg-white/18 md:h-32 md:w-32" />
              <div className="absolute left-[22%] bottom-[18%] h-20 w-52 animate-[floatY_11s_ease-in-out_infinite] rounded-2xl border border-white/40 bg-white/16 backdrop-blur-sm md:h-24 md:w-64" />
              <div className="absolute right-[18%] bottom-[14%] h-16 w-16 animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-[#ff6b8c]/70 md:h-20 md:w-20" />
              <div className="absolute right-[8%] bottom-[34%] h-12 w-44 animate-[floatY_12s_ease-in-out_infinite] rounded-xl bg-white/18 backdrop-blur-sm md:w-52" />
              <Reveal delay={0.14}>
                <div className="absolute right-4 top-6 max-w-[190px] animate-[floatY_15s_ease-in-out_infinite] rounded-2xl border border-white/45 bg-white/40 px-3 py-2 text-left text-[11px] font-medium leading-snug text-[#1a1d2a] shadow-[0_10px_24px_rgba(22,48,88,0.14)] backdrop-blur-xl md:right-8 md:max-w-[220px] md:text-[13px]">
                  <span className="font-bold">Полный цикл</span> ведения
                  <br />
                  аккаунта под ключ
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="absolute bottom-20 left-4 max-w-[200px] animate-[floatY_17s_ease-in-out_infinite] rounded-2xl border border-white/45 bg-white/40 px-3 py-2 text-left text-[11px] font-medium leading-snug text-[#1a1d2a] shadow-[0_10px_24px_rgba(22,48,88,0.14)] backdrop-blur-xl md:bottom-24 md:left-8 md:max-w-[235px] md:text-[13px]">
                  Увеличим Ваши продажи в 1,5-4 раза
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="absolute bottom-6 right-4 max-w-[160px] animate-[floatY_16s_ease-in-out_infinite] rounded-2xl border border-white/45 bg-white/40 px-3 py-2 text-left text-[11px] font-medium leading-snug text-[#1a1d2a] shadow-[0_10px_24px_rgba(22,48,88,0.14)] backdrop-blur-xl md:right-8 md:max-w-[180px] md:text-[13px]">
                  От настроек до лидов
                </div>
              </Reveal>
            </div>
            </div>
          </article>

          <div className="mt-3 rounded-[22px] bg-[#f1f2f4] px-4 py-5 md:px-9">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {topStats.map((item, idx) => (
                <Reveal key={item.label} delay={idx * 0.04}>
                  <div className="text-center">
                    <p className="text-5xl font-black text-[#1fa3e6] md:text-7xl">
                      <CountUp to={item.value} suffix={item.suffix} />
                    </p>
                    <p className="mt-1 text-xs font-semibold text-[#4b5478] md:text-sm">{item.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container-shell py-10 md:py-14">
        <Reveal>
          <article className="rounded-3xl bg-[linear-gradient(90deg,#4fbcff,#6e72ff)] px-5 py-5 text-white shadow-[0_14px_35px_rgba(88,100,180,0.16)] md:px-8">
            <h2 className="text-2xl font-black md:text-4xl">Мы делаем результат на Авито системно</h2>
            <p className="mt-2 max-w-3xl text-sm text-white/90 md:text-base">
              Переходим к следующему блоку лендинга, сохраняя стилистику и ритм экрана.
            </p>
          </article>
        </Reveal>
      </section>

      <section id="work" className="bg-[#eceef3] py-10 md:py-14">
        <div className="container-shell">
          <article className="rounded-[26px] bg-[#eff1f5] p-2 md:p-3">
            <div className="rounded-[24px] bg-white p-3 md:p-4">
              <div className="grid gap-3 md:grid-cols-[0.9fr_1.9fr]">
                <Reveal>
                  <div className="flex h-full items-center rounded-2xl bg-white px-3 py-5 md:px-8">
                    <h2 className="text-[36px] font-black leading-[1.04] tracking-[-0.02em] text-[#131722] md:text-[50px]">
                      Бесплатно
                      <br />
                      проведём
                      <br />
                      разбор вашего
                      <br />
                      бизнеса
                      <br />
                      на Авито!
                    </h2>
                  </div>
                </Reveal>

                <Reveal delay={0.05}>
                  <div className="relative h-full">
                    <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8ad5ff] bg-[#e8f6ff] px-6 py-1 text-xs font-extrabold text-[#2f8dbf] md:text-sm">
                      План:
                    </div>
                    <div className="rounded-[18px] bg-[#1fa8ea] px-4 pb-3 pt-6 md:px-7 md:pb-4 md:pt-7">
                      <div className="grid gap-4 md:grid-cols-3">
                        {[
                          "Определим целевую аудиторию и упакуем продукт",
                          "Выявим особенности категории",
                          "Проведём анализ поисковой выдачи и конкурентов",
                        ].map((item, i) => (
                          <div key={item} className="flex items-start gap-3 md:min-h-[110px]">
                            <p className="text-5xl font-black leading-none text-[#eaf8ff] md:text-8xl">
                              {i + 1}
                            </p>
                            <p className="pt-1 text-sm font-medium leading-tight text-[#e0f3ff] md:text-[13px] md:leading-[1.25]">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="my-3 h-px bg-white/50 md:my-4" />
                      <div className="grid gap-4 md:grid-cols-3">
                        {[
                          "Проанализируем спрос на товар или услугу",
                          "Выберем подходящий тариф и набор услуг",
                          "Сформируем стратегию продвижения под ключ",
                        ].map((item, i) => (
                          <div key={item} className="flex items-start gap-3 md:min-h-[110px]">
                            <p className="text-5xl font-black leading-none text-[#eaf8ff] md:text-8xl">
                              {i + 4}
                            </p>
                            <p className="pt-1 text-sm font-medium leading-tight text-[#e0f3ff] md:text-[13px] md:leading-[1.25]">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.1}>
                <Link
                  href="#contact"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#1f97e7] px-6 py-4 text-xl font-black text-white transition hover:bg-[#1a89d0] md:text-5xl"
                >
                  Оставить заявку
                </Link>
              </Reveal>
            </div>
          </article>
        </div>
      </section>

      <section id="tariffs" className="container-shell py-12 md:py-16">
        <Reveal>
          <h2 className="section-title">Тарифы</h2>
          <p className="mt-3 text-[#4a4f66]">
            Три уровня подключения под задачи бизнеса.
          </p>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {tariffs.map((tariff, i) => (
            <Reveal key={tariff.title} delay={i * 0.06}>
              <article className={`rounded-3xl bg-gradient-to-br p-6 text-white shadow-[0_14px_35px_rgba(88,100,180,0.18)] ${tariff.color}`}>
                <h3 className="text-2xl font-black">{tariff.title}</h3>
                <p className="mt-2 text-3xl font-black">{tariff.price}</p>
                <p className="mt-3 text-sm text-white/90">{tariff.description}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {tariff.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <CircleCheckBig size={16} className="mt-0.5 text-white" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 font-bold text-[#2f3c69]">
                  Подключить
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="cases" className="bg-[linear-gradient(90deg,#5f8eff,#8e66ff)] py-16 text-white">
        <div className="container-shell">
          <Reveal>
            <h2 className="section-title">Наши кейсы</h2>
            <p className="mt-3 max-w-3xl text-white/90">
              Реальные результаты и цифры по нишам.
            </p>
          </Reveal>
          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {cases.map((c, i) => (
              <Reveal key={c} delay={i * 0.05}>
                <article className="rounded-2xl border border-white/30 bg-white/10 p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-wider text-white/80">Кейс #{i + 1}</p>
                  <h3 className="mt-2 text-lg font-bold">{c}</h3>
                  <p className="mt-3 text-2xl font-black">
                    <CountUp to={80 + i * 40} suffix="+" /> заявок
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-5 flex justify-center">
              <Link href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-2 font-bold text-[#5f8eff]">
                Смотреть все кейсы
                <ChevronRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell py-16">
        <Reveal>
          <article className="rounded-3xl bg-[linear-gradient(100deg,#5fb4ff,#766aff)] p-8 text-white shadow-[0_20px_40px_rgba(76,94,189,0.2)]">
            <h2 className="section-title">Хотите увеличить продажи через Авито?</h2>
            <p className="mt-3 max-w-2xl text-white/90">
              Оставьте заявку, мы покажем точки роста и подготовим стратегию.
            </p>
            <Link href="#contact" className="mt-6 inline-flex rounded-2xl bg-white px-6 py-3 font-black text-[#5f8eff]">
              Детальный разбор
            </Link>
          </article>
        </Reveal>
      </section>

      <section className="container-shell pb-12">
        <Reveal>
          <h2 className="section-title">Частые вопросы</h2>
        </Reveal>
        <div className="mt-8 space-y-3">
          {faq.map((question, i) => (
            <Reveal key={question} delay={i * 0.04}>
              <article className="rounded-2xl border border-[#e6ebff] bg-white px-5 py-4">
                <p className="font-semibold">{question}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell py-12 md:py-16">
        <Reveal>
          <h2 className="section-title">Над проектом работают</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member} delay={i * 0.04}>
              <article className="rounded-2xl bg-white p-3 text-center shadow-[0_8px_24px_rgba(80,93,170,0.08)] md:p-5">
                <div className="mx-auto mb-2 h-14 w-14 rounded-full bg-[linear-gradient(135deg,#5f8eff,#8e66ff)] md:mb-3 md:h-16 md:w-16" />
                <h3 className="text-sm font-bold md:text-base">{member}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#12162a] py-16 text-white">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <Reveal>
            <article>
              <h2 className="section-title">Хотите увеличить продажи через Авито?</h2>
              <p className="mt-4 text-white/80">
                Оставляйте заявку, и мы бесплатно разберём ваш проект и предложим
                оптимальный план продвижения.
              </p>
              <div className="mt-6 flex items-center gap-3 text-white/90">
                <Phone size={18} />
                <a href="tel:+79991234567" className="text-xl font-black">
                  +7 999 123 45 67
                </a>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="rounded-3xl bg-white p-6 text-[#151826]">
              <h3 className="text-2xl font-black">Оставить заявку</h3>
              <form className="mt-5 space-y-4" method="post" action="/api/leads">
                <input
                  name="name"
                  required
                  placeholder="ФИО"
                  className="w-full rounded-xl border border-[#d8def7] px-4 py-3"
                />
                <input
                  name="phone"
                  required
                  placeholder="Телефон"
                  className="w-full rounded-xl border border-[#d8def7] px-4 py-3"
                />
                <label className="flex items-start gap-2 text-xs text-[#5d637e]">
                  <input type="checkbox" required className="mt-0.5" />
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                </label>
                <button type="submit" className="btn-primary w-full">
                  Отправить
                </button>
              </form>
            </article>
          </Reveal>
        </div>
      </section>

      <footer className="container-shell py-8 text-center text-sm text-[#646b86]">
        <p>ООО «NEURO MARKETING» · ИНН 0000000000 · ОГРН 0000000000000</p>
        <p className="mt-2 flex items-center justify-center gap-1">
          <Star size={14} className="text-[#8e66ff]" />
          Продвижение на Авито под ключ
        </p>
      </footer>
    </main>
  );
}

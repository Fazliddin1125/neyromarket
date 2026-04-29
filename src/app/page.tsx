import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CircleCheckBig,
  Menu,
  MessageCircle,
  Phone,
  Send,
  Star,
} from "lucide-react";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";

const stats = [
  { value: 10, suffix: " лет", label: "в продвижении на Авито" },
  { value: 50, suffix: "+", label: "профессионалов в команде" },
  { value: 90, suffix: "%", label: "продолжают работать после 1 месяца" },
  { value: 200, suffix: "+", label: "действующих партнёров по России" },
];

const plan = [
  "Проанализируем спрос на товар или услугу",
  "Проведём анализ конкурентов и выдачи",
  "Определим ЦА и упакуем продукт",
  "Выявим особенности вашей категории",
  "Сформируем стратегию продвижения под ключ",
  "Подберём тариф и набор услуг",
];

const tariffs = [
  {
    title: "Аудит аккаунта",
    price: "10 000 ₽",
    description: "Zoom-разбор 60 минут и пошаговый план запуска.",
    features: [
      "Аналитика спроса и конкурентов",
      "Аудит заголовков, текстов и фотографий",
      "Чек-лист по созданию продающих объявлений",
    ],
  },
  {
    title: "Запуск под ключ",
    price: "от 15 000 ₽",
    description: "Готовый файл автозагрузки и запуск рекламной кампании.",
    features: [
      "Сбор ключевых запросов и УТП",
      "Оформление профиля и стратегия продвижения",
      "Пошаговый план по работе в кабинете Авито",
    ],
  },
  {
    title: "Комплексное ведение",
    price: "от 40 000 ₽",
    description: "Постоянная работа с аккаунтом и регулярная оптимизация.",
    features: [
      "Ежедневная аналитика и замена неэффективных объявлений",
      "Управление доп. услугами продвижения",
      "Работа с поддержкой и отчётность",
    ],
  },
];

const team = [
  "Руководитель отдела продаж",
  "Персональный авитолог",
  "Дизайнер креативов",
  "Контент-менеджер",
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Продвижение на Авито под ключ",
    description:
      "Получайте больше клиентов с Авито уже сейчас. Аудит, запуск и комплексное ведение рекламных кампаний.",
  };
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col pb-16">
      <section className="container-shell py-4 md:py-6">
        <header className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-[0_8px_30px_rgba(83,95,180,0.08)] md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/neuro-logo.png"
              alt="Логотип Neuro Marketing"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
              priority
            />
            <div>
              <p className="text-sm font-black leading-none">NEURO</p>
              <p className="text-[10px] font-semibold tracking-wide text-[#666]">
                MARKETING
              </p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
            <Link href="#work">Как мы работаем</Link>
            <Link href="#cases">Кейсы</Link>
            <Link href="#tariffs">Тарифы</Link>
            <Link href="#about">О нас</Link>
            <Link href="#contact">Контакты</Link>
          </nav>
          <details className="group relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-[#d7def8] bg-white text-[#1b213f]">
              <Menu size={20} />
            </summary>
            <nav className="absolute right-0 top-12 z-40 w-56 rounded-2xl border border-[#d7def8] bg-white p-3 shadow-[0_16px_35px_rgba(83,95,180,0.15)]">
              <ul className="space-y-1 text-sm font-semibold text-[#1b213f]">
                <li>
                  <Link className="block rounded-lg px-3 py-2 hover:bg-[#eef2ff]" href="#work">
                    Как мы работаем
                  </Link>
                </li>
                <li>
                  <Link className="block rounded-lg px-3 py-2 hover:bg-[#eef2ff]" href="#cases">
                    Кейсы
                  </Link>
                </li>
                <li>
                  <Link className="block rounded-lg px-3 py-2 hover:bg-[#eef2ff]" href="#tariffs">
                    Тарифы
                  </Link>
                </li>
                <li>
                  <Link className="block rounded-lg px-3 py-2 hover:bg-[#eef2ff]" href="#about">
                    О нас
                  </Link>
                </li>
                <li>
                  <Link className="block rounded-lg px-3 py-2 hover:bg-[#eef2ff]" href="#contact">
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
          </details>
          <div className="hidden items-center gap-4 md:flex">
            <a href="tel:+79991234567" className="text-xl font-black">
              +7 999 123 45 67
            </a>
            <Link href="#contact" className="btn-primary">
              Обсудить проект
            </Link>
          </div>
        </header>
      </section>

      <section className="container-shell">
        <article className="relative overflow-hidden rounded-[28px] border border-[#ebefff] bg-[linear-gradient(125deg,#f7f9ff_0%,#eef2ff_48%,#e8ecff_100%)] shadow-[0_24px_60px_rgba(67,81,170,0.12)]">
          <div className="relative grid min-h-[430px] md:grid-cols-[1.05fr_1fr]">
            <div className="relative z-20 flex flex-col justify-center px-6 py-8 sm:px-10 md:pr-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,#eef3ffcc_0%,transparent_36%),radial-gradient(circle_at_58%_80%,#f0e7ff99_0%,transparent_42%)]" />
              <div className="absolute -left-5 top-8 h-24 w-24 rounded-3xl border border-[#dbe3ff] bg-white/70" />
              <div className="absolute left-18 top-28 h-16 w-16 rounded-full border border-[#d9e2ff] bg-[#edf2ff]" />
              <div className="absolute right-10 top-10 h-20 w-20 rotate-12 rounded-2xl border border-[#e2d8ff] bg-[#f4eeff]" />
              <div className="absolute bottom-14 left-14 h-10 w-36 -rotate-6 rounded-xl bg-[linear-gradient(90deg,#e7eeff,#f0e8ff)]" />
              <div className="absolute bottom-10 right-10 h-14 w-14 rounded-full bg-[#ff4f6420]" />

              <div className="relative z-20">
                <h1 className="max-w-xl text-4xl font-black leading-[1.08] text-[#101321] sm:text-6xl">
                  Профессиональное
                  <span className="mt-2 block w-fit rounded-2xl bg-[#ff4f64] px-2 py-1 text-white">
                    продвижение
                  </span>
                  бизнеса на Avito
                </h1>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="#cases" className="btn-primary gap-2">
                    Смотреть кейсы
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://wa.me/79150577973"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#d7def8] bg-white text-[#6b72ff]"
                  >
                    <MessageCircle size={20} />
                  </a>
                  <a
                    href="https://t.me/leadkey"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#d7def8] bg-white text-[#4d8ff0]"
                  >
                    <Send size={20} />
                  </a>
                </div>
                <p className="mt-4 max-w-xs text-sm text-[#1f2232]">
                  Напишите нам и <b>получите аудит</b> размещения в подарок
                </p>
              </div>
            </div>

            <div className="relative z-0 min-h-[320px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#dfe9ff_0%,transparent_40%),radial-gradient(circle_at_78%_34%,#e8dcff_0%,transparent_42%)]" />
              <div className="absolute left-8 top-8 h-20 w-20 rounded-2xl border border-white/40 bg-white/15 backdrop-blur" />
              <div className="absolute left-24 top-24 h-36 w-36 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm" />
              <div className="absolute right-12 top-16 h-24 w-24 rotate-12 rounded-3xl border border-white/40 bg-white/15 backdrop-blur" />
              <div className="absolute bottom-12 left-12 h-28 w-52 -rotate-6 rounded-3xl border border-white/40 bg-white/12 backdrop-blur-sm" />
              <div className="absolute bottom-16 right-20 h-16 w-16 rounded-full border border-white/40 bg-[#ff4f6480]" />
              <div className="absolute bottom-6 right-6 h-12 w-40 rounded-xl bg-white/15 backdrop-blur" />
              <div className="absolute right-4 top-6 rounded-2xl bg-white/90 px-4 py-3 text-sm font-bold text-[#22253a] shadow-lg md:right-8">
                Полный цикл ведения аккаунта под ключ
              </div>
              <div className="absolute bottom-6 right-4 rounded-2xl bg-white px-4 py-3 text-center shadow-lg md:right-8">
                <p className="text-2xl font-black">
                  <CountUp to={150} prefix="+" suffix="%" />
                </p>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#666c88]">
                  рост лидов
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section id="about" className="container-shell py-16">
        <Reveal>
          <h2 className="section-title">Мы — рекламное агентство</h2>
          <p className="mt-3 max-w-3xl text-[#4a4f66]">
            Более 10 лет помогаем бизнесу масштабировать продажи через Авито:
            от первичного аудита до системного ведения и оптимизации.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, idx) => (
            <Reveal key={item.label} delay={idx * 0.05}>
              <article className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(78,90,167,0.08)]">
                <p className="text-4xl font-black text-[#5f8eff]">
                  <CountUp to={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-2 text-sm text-[#4a4f66]">{item.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="work" className="bg-white py-16">
        <div className="container-shell">
          <Reveal>
            <h2 className="section-title">План работы</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {plan.map((point, i) => (
              <Reveal key={point} delay={i * 0.04}>
                <article className="rounded-2xl border border-[#e7ecff] p-5">
                  <p className="text-xs font-black uppercase tracking-wider text-[#8e66ff]">
                    Шаг {i + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-bold leading-snug">{point}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="tariffs" className="container-shell py-16">
        <Reveal>
          <h2 className="section-title">Тарифы</h2>
          <p className="mt-3 text-[#4a4f66]">
            Широкий спектр услуг под любые потребности вашего бизнеса.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {tariffs.map((tariff, i) => (
            <Reveal key={tariff.title} delay={i * 0.06}>
              <article className="rounded-3xl bg-white p-6 shadow-[0_14px_35px_rgba(88,100,180,0.1)]">
                <h3 className="text-2xl font-black">{tariff.title}</h3>
                <p className="mt-2 text-3xl font-black text-[#8e66ff]">{tariff.price}</p>
                <p className="mt-3 text-sm text-[#4a4f66]">{tariff.description}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {tariff.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <CircleCheckBig size={16} className="mt-0.5 text-[#5f8eff]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="btn-outline mt-6 w-full">
                  Оставить заявку
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="cases" className="bg-[linear-gradient(90deg,#5f8eff,#8e66ff)] py-16 text-white">
        <div className="container-shell">
          <Reveal>
            <h2 className="section-title">Наши кейсы и отзывы</h2>
            <p className="mt-3 max-w-3xl text-white/90">
              Реальные результаты по разным нишам: рост заявок, снижение CPL и
              стабильная окупаемость рекламы.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Автоуслуги", "Стройматериалы", "Услуги B2B"].map((c, i) => (
              <Reveal key={c} delay={i * 0.05}>
                <article className="rounded-2xl border border-white/30 bg-white/10 p-5 backdrop-blur">
                  <p className="text-sm uppercase tracking-wider text-white/80">Кейс</p>
                  <h3 className="mt-2 text-xl font-bold">{c}</h3>
                  <p className="mt-4 text-3xl font-black">
                    <CountUp to={120 + i * 80} suffix="+" /> лидов/мес
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <Reveal>
          <h2 className="section-title">Над проектом работают</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member} delay={i * 0.04}>
              <article className="rounded-2xl bg-white p-5 text-center shadow-[0_8px_24px_rgba(80,93,170,0.08)]">
                <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-[linear-gradient(135deg,#5f8eff,#8e66ff)]" />
                <h3 className="font-bold">{member}</h3>
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

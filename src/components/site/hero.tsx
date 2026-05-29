import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Brain,
  TrendingUp,
  Target,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";

const stats = [
  { value: 230, prefix: "+", suffix: "%", label: "рост конверсии на проектах" },
  { value: 350, prefix: "+", suffix: "", label: "запущенных кампаний" },
  { value: 4, prefix: "", suffix: "×", label: "средний возврат инвестиций" },
  { value: 7, prefix: "", suffix: " лет", label: "опыта в нейромаркетинге" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* perspective grid */}
        <div
          className="absolute inset-0 animate-[gridPulse_6s_ease-in-out_infinite] opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, #2a2e55 1px, transparent 1px), linear-gradient(to bottom, #2a2e55 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(circle at 60% 30%, #000 0%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at 60% 30%, #000 0%, transparent 70%)",
          }}
        />
        {/* floating glow orbs */}
        <div className="absolute -top-10 left-[8%] h-72 w-72 animate-[floatY_11s_ease-in-out_infinite] rounded-full bg-[var(--brand-indigo)]/30 blur-3xl" />
        <div className="absolute top-24 right-[6%] h-80 w-80 animate-[floatY2_14s_ease-in-out_infinite] rounded-full bg-[var(--brand-cyan)]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 animate-[floatY_16s_ease-in-out_infinite] rounded-full bg-[var(--brand-violet)]/20 blur-3xl" />
      </div>

      <div className="container-shell">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* ---------- LEFT: copy ---------- */}
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="eyebrow">
                <Sparkles size={14} className="text-[var(--brand-cyan)]" />
                Лаборатория нейромаркетинга
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-6 text-balance text-[30px] font-black leading-[1.08] tracking-tight sm:text-[44px] md:text-[56px] lg:text-[58px]">
                Маркетинг, который{" "}
                <br className="hidden sm:block" />
                понимает{" "}
                <span className="text-gradient">мозг&nbsp;клиента</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--muted)] md:text-xl lg:mx-0">
                Соединяем нейробиологию, поведенческую психологию и данные,
                чтобы ваши кампании попадали точно в желания аудитории — и
                приносили в&nbsp;2–3&nbsp;раза больше заявок.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link href="#contact" className="btn-primary text-base">
                  Получить стратегию бесплатно
                  <ArrowRight size={18} />
                </Link>
                <Link href="#pricing" className="btn-outline text-base">
                  Смотреть кейсы
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--muted)] lg:justify-start">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[var(--brand-cyan)]" />
                  Бесплатный нейроаудит
                </span>
                <span className="inline-flex items-center gap-2">
                  <Target size={16} className="text-[var(--brand-violet)]" />
                  Стратегия за 5 дней
                </span>
              </div>
            </Reveal>
          </div>

          {/* ---------- RIGHT: person composition ---------- */}
          <Reveal delay={0.16}>
            <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
              {/* ambient backdrop */}
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 animate-[glowPulse_9s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(109,93,252,0.30),rgba(34,211,238,0.10)_45%,transparent_68%)] blur-2xl" />
              </div>

              {/* rotating conic halo ring */}
              <div
                className="pointer-events-none absolute left-1/2 top-[10%] -z-10 aspect-square w-[80%] -translate-x-1/2 animate-[haloSpin_28s_linear_infinite] rounded-full opacity-60"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, rgba(109,93,252,0.7) 90deg, transparent 200deg, rgba(34,211,238,0.6) 320deg, transparent 360deg)",
                  maskImage:
                    "radial-gradient(circle, transparent 60%, #000 61%, #000 70%, transparent 71%)",
                  WebkitMaskImage:
                    "radial-gradient(circle, transparent 60%, #000 61%, #000 70%, transparent 71%)",
                }}
              />

              <div className="relative flex items-end justify-center">
                {/* glass panel behind subject */}
                <div className="absolute bottom-0 left-1/2 h-[82%] w-[86%] -translate-x-1/2 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-[0_40px_120px_-30px_rgba(109,93,252,0.55)] backdrop-blur-sm" />

                {/* contact-shadow ellipse under feet */}
                <div className="absolute bottom-[4%] left-1/2 h-10 w-[62%] -translate-x-1/2 rounded-[50%] bg-black/60 blur-2xl" />

                {/* the person */}
                <Image
                  src="/hero-person.png"
                  alt="Эксперт лаборатории нейромаркетинга"
                  width={258}
                  height={696}
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 420px, 480px"
                  className="relative z-10 h-[440px] w-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)] sm:h-[520px] lg:h-[600px]"
                />

                {/* floating glass badges */}
                <div className="absolute left-[-4%] top-[14%] z-20 animate-[floatY_7s_ease-in-out_infinite]">
                  <div className="glass-badge">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--brand-indigo)]/25 text-[var(--brand-cyan)]">
                      <Brain size={18} />
                    </span>
                    <span className="text-left leading-tight">
                      <span className="block text-sm font-bold text-[var(--foreground)]">
                        Нейроанализ ЦА
                      </span>
                      <span className="block text-xs text-[var(--muted)]">
                        что движет покупкой
                      </span>
                    </span>
                  </div>
                </div>

                <div className="absolute right-[-6%] top-[42%] z-20 animate-[floatY2_9s_ease-in-out_infinite]">
                  <div className="glass-badge">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--brand-violet)]/25 text-[var(--brand-violet)]">
                      <TrendingUp size={18} />
                    </span>
                    <span className="text-left leading-tight">
                      <span className="block text-sm font-bold text-gradient">
                        +187% конверсия
                      </span>
                      <span className="block text-xs text-[var(--muted)]">
                        за первый месяц
                      </span>
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-[10%] left-[-2%] z-20 animate-[floatY_8s_ease-in-out_infinite]">
                  <div className="glass-badge">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--brand-cyan)]/20 text-[var(--brand-cyan)]">
                      <Target size={18} />
                    </span>
                    <span className="text-left leading-tight">
                      <span className="block text-sm font-bold text-[var(--foreground)]">
                        ROI ×4.2
                      </span>
                      <span className="block text-xs text-[var(--muted)]">
                        средний по кампаниям
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats bar */}
        <Reveal delay={0.3}>
          <div className="card mt-16 grid grid-cols-2 gap-px overflow-hidden md:mt-20 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="bg-[var(--surface)] px-6 py-7 text-center">
                <p className="text-4xl font-black text-gradient md:text-5xl">
                  <CountUp to={item.value} prefix={item.prefix} suffix={item.suffix} />
                </p>
                <p className="mt-2 text-xs font-medium text-[var(--muted)] md:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/a420a709-61bd-49c2-81c3-092f20eca4aa/files/cde48d92-df79-42d9-a47d-2e64abfcaacc.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главное" },
  { id: "contact", label: "Связь" },
  { id: "donate", label: "Проходка" },
];

const DONATE_TIERS = [
  {
    name: "Деревянный",
    emoji: "🪵",
    price: "149 ₽",
    border: "#A07340",
    highlight: "#C4955A",
    perks: ["Приставка [Дерево]", "Доступ к /kit wood", "10 бонусных блоков"],
    featured: false,
  },
  {
    name: "Золотой",
    emoji: "⭐",
    price: "399 ₽",
    border: "#A07800",
    highlight: "#FFD700",
    perks: ["Приставка [Золото]", "Доступ к /fly", "Приоритетный вход", "50 бонусных блоков"],
    featured: true,
  },
  {
    name: "Алмазный",
    emoji: "💎",
    price: "799 ₽",
    border: "#00A0A0",
    highlight: "#44F3F3",
    perks: ["Приставка [Алмаз]", "Доступ к /god", "Личный варп", "Уникальный скин меча", "200 бонусных блоков"],
    featured: false,
  },
];

const CONTACTS = [
  { icon: "MessageCircle", label: "Discord", value: "discord.gg/smp", color: "#5865F2" },
  { icon: "Send", label: "Telegram", value: "@smp_server", color: "#2AABEE" },
  { icon: "Globe", label: "IP Сервера", value: "d1.rustix.me:25212", color: "#5AAB1E" },
];

const FEATURES = [
  { icon: "🏡", title: "Выживание", desc: "Классический SMP без читов. Строй базы, добывай ресурсы, торгуй с игроками." },
  { icon: "🗺️", title: "Квесты", desc: "Уникальные задания с наградами. Исследуй мир и открывай секретные локации." },
  { icon: "🛡️", title: "Защита", desc: "Система защиты чанков. Твои постройки в безопасности 24/7." },
  { icon: "💬", title: "Сообщество", desc: "Активный Discord и Telegram. Всегда найдёшь компанию для игры." },
  { icon: "🏆", title: "Рейтинг", desc: "Соревнуйся с другими игроками в таблице лидеров сервера." },
  { icon: "🎁", title: "Ивенты", desc: "Регулярные события с призами. Следи за анонсами в нашем Discord." },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [copiedIp, setCopiedIp] = useState(false);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const copyIp = () => {
    navigator.clipboard.writeText("d1.rustix.me:25212");
    setCopiedIp(true);
    setTimeout(() => setCopiedIp(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">

      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 mc-panel border-b-4 border-mc-green/30">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 mc-block grass-top flex items-center justify-center">
              <span className="text-base">⛏</span>
            </div>
            <span className="font-pixel text-mc-green text-sm tracking-widest pixel-text-shadow">
              SMP
            </span>
          </div>

          <div className="flex gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`
                  font-pixel text-[9px] px-3 py-2 transition-all
                  ${activeSection === item.id
                    ? "bg-mc-green text-white"
                    : "text-mc-stone-light hover:text-mc-green"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMG}
            alt="SMP мир"
            className="w-full h-full object-cover opacity-30"
            style={{ imageRendering: "pixelated" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        </div>

        {/* Floating blocks */}
        <div className="absolute top-32 left-12 w-10 h-10 mc-block bg-mc-green animate-float opacity-40" style={{ animationDelay: "0s" }} />
        <div className="absolute top-48 right-20 w-8 h-8 mc-block bg-mc-dirt animate-float opacity-30" style={{ animationDelay: "1s" }} />
        <div className="absolute top-64 left-1/4 w-6 h-6 mc-block bg-mc-stone animate-float opacity-25" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-48 right-16 w-12 h-12 mc-block bg-mc-wood animate-float opacity-20" style={{ animationDelay: "0.5s" }} />

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <div className="inline-block mc-panel px-4 py-1 mb-6 animate-fade-in">
            <span className="font-pixel text-mc-green text-[9px] tracking-widest">
              🟢 СЕРВЕР ОНЛАЙН · 24/7
            </span>
          </div>

          <h1 className="font-pixel text-5xl md:text-7xl text-mc-green mb-4 pixel-text-shadow animate-fade-in animate-delay-100 opacity-0-init leading-tight">
            SMP
          </h1>
          <p className="font-pixel text-mc-stone-light text-[11px] md:text-sm mb-2 animate-fade-in animate-delay-200 opacity-0-init">
            Выживай. Строй. Исследуй.
          </p>
          <p className="font-body text-muted-foreground text-base mb-10 animate-fade-in animate-delay-300 opacity-0-init max-w-xl mx-auto">
            Дружелюбный SMP-сервер с активным сообществом, уникальными квестами и честной игрой без pay-to-win.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animate-delay-400 opacity-0-init">
            <button
              onClick={copyIp}
              className="mc-btn px-6 py-3 text-[10px] flex items-center gap-2 min-w-[200px] justify-center"
            >
              <Icon name={copiedIp ? "Check" : "Copy"} size={14} />
              {copiedIp ? "СКОПИРОВАНО!" : "d1.rustix.me:25212"}
            </button>
            <button
              onClick={() => scrollTo("donate")}
              className="mc-btn-gold px-6 py-3 text-[10px] flex items-center gap-2 min-w-[200px] justify-center"
            >
              <Icon name="Star" size={14} />
              ПОЛУЧИТЬ ПРОХОДКУ
            </button>
          </div>
        </div>

        {/* Bottom grass row */}
        <div className="absolute bottom-0 left-0 right-0 flex overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="h-8 w-8 mc-block grass-top flex-shrink-0" />
          ))}
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-mc-green text-xl md:text-2xl pixel-text-shadow mb-3">
            ⚔ Что нас ждёт?
          </h2>
          <p className="font-body text-muted-foreground">Особенности нашего сервера</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURES.map((feat, i) => (
            <div
              key={i}
              className="mc-panel p-5 hover:border-mc-green/50 transition-all duration-300 animate-fade-in opacity-0-init"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl mb-3">{feat.icon}</div>
              <h3 className="font-pixel text-mc-green text-[11px] mb-2 pixel-text-shadow">{feat.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mc-sky-dark/50 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-pixel text-mc-green text-xl md:text-2xl pixel-text-shadow mb-3">
              📡 Связь
            </h2>
            <p className="font-body text-muted-foreground">Есть вопросы? Мы всегда на связи</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {CONTACTS.map((c, i) => (
              <div
                key={i}
                className="mc-panel p-6 text-center animate-fade-in opacity-0-init cursor-pointer hover:scale-105 transition-transform"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div
                  className="w-12 h-12 mx-auto mb-3 mc-block flex items-center justify-center"
                  style={{ backgroundColor: c.color + "33" }}
                >
                  <Icon name={c.icon} size={22} style={{ color: c.color }} />
                </div>
                <div className="font-pixel text-[9px] mb-2" style={{ color: c.color }}>{c.label}</div>
                <div className="font-body text-foreground text-sm">{c.value}</div>
              </div>
            ))}
          </div>

          <div className="mc-panel p-6">
            <h3 className="font-pixel text-mc-green text-[11px] mb-5 pixel-text-shadow">✉ Написать нам</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-pixel text-[9px] text-muted-foreground block mb-2">НИК В ИГРЕ</label>
                  <input className="mc-input" placeholder="Steve123" />
                </div>
                <div>
                  <label className="font-pixel text-[9px] text-muted-foreground block mb-2">КОНТАКТ</label>
                  <input className="mc-input" placeholder="@username или email" />
                </div>
              </div>
              <div>
                <label className="font-pixel text-[9px] text-muted-foreground block mb-2">СООБЩЕНИЕ</label>
                <textarea className="mc-input min-h-[100px] resize-none" placeholder="Ваш вопрос..." />
              </div>
              <button className="mc-btn px-6 py-3 text-[10px] w-full">
                ОТПРАВИТЬ СООБЩЕНИЕ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DONATE ===== */}
      <section id="donate" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <div className="inline-block mc-panel px-4 py-1 mb-4">
              <span className="font-pixel text-yellow-400 text-[9px]">💰 ПОДДЕРЖИ СЕРВЕР</span>
            </div>
            <h2 className="font-pixel text-mc-green text-xl md:text-2xl pixel-text-shadow mb-3">
              Проходка
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Каждая донация помогает нам поддерживать сервер и добавлять новый контент. Получи уникальные привилегии!
            </p>
          </div>

          <div className="text-center mb-10">
            <span className="font-pixel text-[9px] text-mc-stone-light bg-mc-stone-dark/30 px-3 py-1 inline-block">
              ✓ БЕЗ PAY-TO-WIN — только косметика и удобство
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DONATE_TIERS.map((tier, i) => (
              <div
                key={i}
                className={`mc-panel p-6 animate-fade-in opacity-0-init relative ${tier.featured ? "ring-2 ring-yellow-500/60" : ""}`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="font-pixel text-[8px] bg-yellow-500 text-black px-3 py-1 whitespace-nowrap">
                      ★ ПОПУЛЯРНОЕ
                    </span>
                  </div>
                )}

                <div className="text-4xl mb-4 text-center">{tier.emoji}</div>
                <h3 className="font-pixel text-center text-[12px] mb-2 pixel-text-shadow" style={{ color: tier.highlight }}>
                  {tier.name}
                </h3>

                <div className="text-center mb-6">
                  <span className="font-pixel text-3xl" style={{ color: tier.highlight, textShadow: "2px 2px 0 rgba(0,0,0,0.6)" }}>
                    {tier.price}
                  </span>
                  <span className="font-body text-muted-foreground text-xs block">/ навсегда</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {tier.perks.map((perk, j) => (
                    <li key={j} className="font-body text-sm text-foreground/80 flex items-start gap-2">
                      <span style={{ color: tier.highlight }} className="mt-0.5">▶</span>
                      {perk}
                    </li>
                  ))}
                </ul>

                <button className={tier.featured ? "mc-btn-gold w-full py-3 text-[10px]" : "mc-btn w-full py-3 text-[10px]"}>
                  КУПИТЬ ПРОХОДКУ
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 mc-panel p-5 max-w-xl mx-auto">
            <p className="font-body text-muted-foreground text-sm">
              💳 Принимаем оплату через банковские карты, СБП и криптовалюту.<br />
              Проходка активируется автоматически в течение 5 минут.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="mc-panel border-t-4 border-mc-green/20 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-6 h-6 mc-block grass-top" />
            <span className="font-pixel text-mc-green text-sm pixel-text-shadow">SMP</span>
            <div className="w-6 h-6 mc-block grass-top" />
          </div>
          <p className="font-body text-muted-foreground text-sm mb-2">
            Сервер работает с 2024 года · d1.rustix.me:25212
          </p>
          <p className="font-pixel text-[8px] text-muted-foreground/50">
            НЕ ОФИЦИАЛЬНЫЙ ПРОДУКТ MOJANG
          </p>
        </div>
      </footer>
    </div>
  );
}
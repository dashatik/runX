import React from "react";

export default function SolutionSection() {
  const items = [
    {
      emoji: "🧠",
      title: "AI-маршруты",
      text: "Учитывает локацию, цель, погоду — и генерирует идеальный маршрут.",
    },
    {
      emoji: "⚙️",
      title: "Уровень и стиль бега",
      text: "Подстраивается под твой темп, покрытие, среднюю скорость.",
    },
    {
      emoji: "🏆",
      title: "Геймификация",
      text: "Челленджи, дуэли, XP и уровни — не просто бег, а приключение.",
    },
    {
      emoji: "📱",
      title: "Telegram-бот",
      text: "Всё прямо в Telegram. Без новых приложений и регистрации.",
    },
  ];

  return (
    <section
      className="relative w-full py-32 px-6 text-white overflow-hidden"
      style={{
        backgroundColor: "#0E0E10",
        backgroundImage: "url('/grain.png')", // добавь зернистую текстуру в public
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-[52px] font-semibold tracking-tight uppercase leading-tight mb-20 font-[ui-serif]">
          RunX решает это<br className="hidden md:block" /> просто и мощно
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {items.map(({ emoji, title, text }, index) => (
            <div
              key={index}
              className="bg-[#151518] rounded-[30px] p-8 md:p-10 text-white shadow-2xl border border-white/10 hover:shadow-[0_0_40px_rgba(40,226,160,0.1)] transition-all duration-300"
            >
              <div className="text-3xl mb-4">{emoji}</div>
              <h3 className="text-2xl font-semibold mb-3 tracking-tight font-sans">
                {title}
              </h3>
              <p className="text-[#9FA6B2] text-lg leading-relaxed font-sans">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* затемнение поверх текстуры */}
      <div className="absolute inset-0 bg-black/40 z-0" />
    </section>
  );
}

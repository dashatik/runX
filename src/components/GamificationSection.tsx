import React from "react";

export default function GamificationSection() {
  return (
    <section className="w-full py-28 bg-[#0E0E10] text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-14">
          Бегай с удовольствием. Прокачивайся. Соревнуйся.
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
          {[
            {
              emoji: "🧬",
              title: "Статус и уровни",
              text: "Получай XP за пробежки, расти в уровне, открывай новые возможности.",
            },
            {
              emoji: "🔥",
              title: "Еженедельные челленджи",
              text: "Брось себе вызов. Заверши миссию недели и получи награду.",
            },
            {
              emoji: "⚔️",
              title: "Дуэли",
              text: "Сразись с другом — кто пробежит быстрее?",
            },
            {
              emoji: "🏁",
              title: "Ладдер",
              text: "Участвуй в рейтингах по городам, странам и среди друзей.",
            },
            {
              emoji: "👥",
              title: "Комьюнити",
              text: "Беги не один. Делись, соревнуйся и вдохновляйся другими.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#151518] p-6 rounded-2xl shadow-lg border border-gray-800 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">{item.emoji}</span>
                <span>{item.title}</span>
              </h3>
              <p className="text-[#9FA6B2] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

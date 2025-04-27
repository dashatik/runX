import React from "react";

export default function HowItWorksSection() {
  return (
    <section className="w-full py-28 bg-[#0E0E10] text-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-14">
          Всего 3 шага — и ты уже на старте:
        </h2>

        <div className="grid gap-8 md:grid-cols-3 text-left text-lg">
          <div className="bg-[#151518] p-6 rounded-2xl shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              1️⃣ <span>Настрой</span>
            </h3>
            <p className="text-[#9FA6B2] leading-relaxed">
              Выбираешь расстояние, время, тип маршрута.
            </p>
          </div>

          <div className="bg-[#151518] p-6 rounded-2xl shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              2️⃣ <span>Получи маршрут</span>
            </h3>
            <p className="text-[#9FA6B2] leading-relaxed">
              2–3 варианта с погодой, ландшафтом и деталями.
            </p>
          </div>

          <div className="bg-[#151518] p-6 rounded-2xl shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              3️⃣ <span>Стартуй</span>
            </h3>
            <p className="text-[#9FA6B2] leading-relaxed">
              Нажимаешь Старт → бежишь → получаешь XP и достижения.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

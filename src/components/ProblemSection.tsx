import React from "react";

export default function ProblemSection() {
  return (
    <section className=" flex items-center justify-center pt-[60px] pb-[60px] w-full py-28  text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-10">
          Ты хочешь пробежать 5 км. Но где?
        </h2>

        <ul className="space-y-6 text-left text-lg text-[#9FA6B2] max-w-2xl mx-auto">
          <li className="flex items-start gap-3">
            <span className="text-xl">😒</span>
            <span>Тебе скучно бегать по одним и тем же улицам</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">📍</span>
            <span>В новом городе — теряешься, гуглишь, спрашиваешь</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">❓</span>
            <span>Ты не знаешь, где безопасно, красиво, удобно</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🕳️</span>
            <span>Ты теряешь мотивацию — и снова пропускаешь тренировку</span>
          </li>
        </ul>
      </div>


    </section>
  );
}

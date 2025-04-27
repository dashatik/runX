import React from "react";

export default function HeroSection() {
  return (
<section id="herobanner" className="min-h-screen w-full flex items-center bg-[#0E0E10] text-white px-6 py-20 md:py-32 relative overflow-hidden">
      
      {/* Animated Gradient Background */}
      <svg id="animated-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="absolute top-0 left-1/4 -translate-x-1 z-0">
        <defs>
          <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
            <animate attributeName="fx" dur="34s" values="10%;10%;10%" repeatCount="indefinite" />
            <stop offset="0%" stopColor="rgba(225, 255, 1, 1)" />
            <stop offset="100%" stopColor="rgba(22, 0, 22, 0)" />
          </radialGradient>
          {/* Add other gradients if needed */}
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
          <animate attributeName="x" dur="40s" values="25%;0%;25%" repeatCount="indefinite" />
        </rect>
      </svg>      
      <div className="container flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">

        <h1 className="text-[64px] text-[#eee] md:text-[40px] md:text-lg font-700 leading-tight tracking-tight mb-6">
          RunX твой гид для бега
        </h1>

        <h2 className="text-base text-[20px] md:text-lg text-[#eee] mt-[10px] leading-relaxed ">
          Получай персональные маршруты, соревнуйся с друзьями и прокачивай форму - где угодно, когда угодно.
        </h2>

        <a
          href="#early-access"
          className="inline-block bg-[#eeee] text-[#000] mt-[20px] mb-[20px] px-[20px] py-[15px] rounded-full font-semibold shadow-lg hover:bg-[#E1FF01]  hover:scale-[1.05] transition-all duration-300 ease-out shadow-md"
        >
          Получить ранний доступ
        </a>

        <h2 className="mt-6 text-sm text-[#eee] font-[space">
          Тестирование стартует в мае. Присоединяйся!
        </h2>
        
      </div>

      {/* Градиент-фон */}
      <div className="absolute  left-1/2 -translate-x-1/2 blur-[100px] opacity-50 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#0C0C0DE5] to-[#E1FF01] z-0" />
    </section>
  );
}

import React from "react";
import Image from "next/image";

export default function SocialProofSection() {
  return (
    <section className="w-full py-28 bg-[#0E0E10] text-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-14">
          Уже работает. Уже вдохновляет.
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <Image
            src="/images/screenshot-route.png"
            alt="Скриншот маршрута"
            width={300}
            height={600}
            className="rounded-2xl shadow-lg border border-gray-800"
          />
          <Image
            src="/images/screenshot-xp.png"
            alt="Скриншот XP и челленджей"
            width={300}
            height={600}
            className="rounded-2xl shadow-lg border border-gray-800"
          />
        </div>

        <blockquote className="text-xl italic text-[#9FA6B2] max-w-xl mx-auto">
          «Благодаря RunX открыл для себя маршрут в парке, где не был ни разу»
        </blockquote>
        <p className="mt-2 text-sm text-[#9FA6B2]">— тестировщик из Санкт-Петербурга</p>
      </div>
    </section>
  );
}

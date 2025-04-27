import React from "react";

export default function CallToActionSection() {
  return (
    <section
      id="early-access"
      className="w-full py-28 bg-[#0E0E10] text-white px-6"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
          🟢 RunX скоро откроет доступ к первой бете
        </h2>
        <p className="text-lg text-[#9FA6B2] mb-10 leading-relaxed">
          Получи доступ и первым начни бегать по новым маршрутам с умным AI-гидом.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Email или Telegram username"
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#151518] text-white placeholder-[#9FA6B2] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#28E2A0]"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#28E2A0] text-black rounded-full font-semibold hover:bg-[#22c293] hover:scale-[1.02] transition"
          >
            Получить доступ
          </button>
        </form>

        <p className="mt-6 text-sm text-[#9FA6B2]">
          Или подпишись на канал:{" "}
          <a href="https://t.me/runx_beta" className="underline hover:text-white">
            t.me/runx_beta
          </a>
        </p>
      </div>
    </section>
  );
}

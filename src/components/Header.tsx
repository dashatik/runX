import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full py-6 text-white sticky top-0 z-50">
      <div className="container pl-[24px] pr-[24px] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Logo.svg"
            alt="RunX Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* CTA Button */}
        <Link href="https://t.me/runxapp_bot">
            <button className="px-6 py-3 bg-[#eee] mt-[20px] mb-[20px] px-[20px] py-[15px] text-black rounded-full font-semibold hover:bg-[#E1FF01] hover:scale-[1.05] transition-all duration-300 ease-out shadow-md">
             Сгенерировать маршрут
            </button>
            </Link>
      </div>
    </header>
  );
}

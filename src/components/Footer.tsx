import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-[#0E0E10] text-[#9FA6B2] text-sm px-6 mt-[40px] pb-[40px]">
      <div className="container  pl-[24px] pr-[24px] flex items-center justify-between text-center sm:text-left">

        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <Image
            src="/Logo.svg"
            alt="RunX Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>

                {/* Links Section */}
          <div>
            <p>
              Поддержка:{" "}
              <a
                href="https://t.me/mashchito"
                className="hover:text-[#E1FF01] transition"
              >
                @mashchito
              </a>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
            <span className="hidden sm:inline">•</span>
            <a
              href="https://t.me/runx_official"
              className="hover:text-[#E1FF01] transition"
            >
              Telegram-канал
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
            <span className="hidden sm:inline">•</span>
            <a
              href="https://t.me/runxapp_bot"
              className="hover:text-[#E1FF01] transition"
            >
              RunX Bot
            </a>
          </div>
                <div className="text-center mt-6">
        <p>© {new Date().getFullYear()} RunX</p>
      </div>
      </div>
    </footer>
  );
}

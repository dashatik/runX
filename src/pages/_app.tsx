import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#0E0E10] text-white font-sans">
      <Component {...pageProps} />
    </div>
  );
}


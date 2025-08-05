"use client";

import { useState } from "react";
import HargaCard from "../components/HargaCard";
import Judul from "../components/Judul";
import planData from "../data/harga";

export default function HargaSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="my-5 md:my-20">
      <Judul>Berapa biaya KOSU?</Judul>

      <div className="flex justify-center items-center gap-4 mb-5 md:mb-10">
        <span className={!isYearly ? "font-semibold" : "text-gray-400"}>
          Bulan
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isYearly}
            onChange={(e) => setIsYearly(e.target.checked)}
          />
          <div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-green-300 transition" />
          <div className="absolute left-1 top-1 w-6 h-6 bg-green-500 rounded-full transition peer-checked:translate-x-6" />
        </label>
        <span className={isYearly ? "font-semibold" : "text-gray-400"}>
          Tahun
        </span>
      </div>

      <div className="flex justify-center items-center mb-5 md:mb-16 text-center text-lg">
        <p>
          Dapatkan lebih <b className="text-green-400">murah</b> <br />
          dengan bayar pertahun
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 md:justify-between gap-5">
        {planData.map((plan, index) => (
          <HargaCard key={index} {...plan} isYearly={isYearly} />
        ))}
      </div>
    </section>
  );
}

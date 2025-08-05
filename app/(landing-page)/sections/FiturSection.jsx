"use client";

import Judul from "../components/Judul";
import CTASection from "./CTASection";
import fiturKOSU from "../data/fitur";
import FiturRow from "../components/FiturRow";

export default function FiturSection() {
  return (
    <section className="my-5 md:my-20">
      <Judul>Kenapa KOSU?</Judul>

      <div className="border p-6 md:p-10 rounded-xl">
        <div className="flex justify-center md:justify-between md:mb-5">
          <h2 className="text-xl md:text-3xl font-bold">Fitur</h2>
          <div className="md:flex hidden gap-x-16 mr-10 text-xl font-bold">
            <span className="bg-black text-white py-2 px-4 rounded-xl">
              Tanpa KOSU
            </span>
            <span className="bg-black text-white py-2 px-4 rounded-xl">
              Dengan KOSU
            </span>
          </div>
        </div>

        <hr className="border-gray-300" />

        <div className="space-y-4">
          {fiturKOSU.map((fitur, index) => (
            <FiturRow
              key={index}
              index={index}
              nama={fitur.nama}
              tanpaKOSU={fitur.tanpaKOSU}
              denganKOSU={fitur.denganKOSU}
            />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <CTASection />
      </div>
    </section>
  );
}

"use client";

import Judul from "../components/Judul";
import { Mail, Phone, MapPin } from "lucide-react";

export default function HubungiSection() {
  return (
    <section className="my-5 md:my-20">
      <Judul>Hubungi</Judul>

      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-black" />
          <span className="text-base">hi@kosu.id</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-black" />
          <span className="text-base">+62-9233-9343-0123</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-black" />
          <span className="text-base">Maps</span>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-300">
        <img
          src="https://placehold.co/800x400?text=Maps"
          alt="Peta lokasi"
          className="w-full rounded-2xl border border-gray-300"
        />
      </div>
    </section>
  );
}

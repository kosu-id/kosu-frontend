"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Judul from "../components/Judul";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CarouselDots } from "@/components/ui/carousel-dots";

const placeholders = [
  "https://placehold.co/800x400?text=1",
  "https://placehold.co/800x400?text=2",
  "https://placehold.co/800x400?text=3",
];

export default function HeroSection() {
  const plugin = useRef(Autoplay({ delay: 3000, loop: true }));

  return (
    <section className="my-5 md:my-20">
      <div className="font-extrabold text-2xl md:text-5xl leading-tight">
        <h1>Kelola kost otomatis.</h1>
        <h1>Rapi.</h1>
        <h1>Tanpa Excel.</h1>
      </div>

      <div className="relative my-10">
        <Carousel plugins={[plugin.current]}>
          <CarouselContent>
            {placeholders.map((src, i) => (
              <CarouselItem key={i}>
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="w-full object-cover rounded-xl max-h-[400px] md:max-h-[500px]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots className="absolute bottom-4 left-1/2 -translate-x-1/2" />
        </Carousel>
      </div>

      <div>
        <Judul>Apa itu KOSU?</Judul>
        <div className="text-lg md:text-4xl leading-relaxed space-y-5">
          <p>
            <strong>KOSU</strong> adalah aplikasi manajemen kost digital
            berbasis web yang bantu pemilik kost mengelola properti dari A
            sampai Z: mulai dari pencatatan kamar, penyewa, tagihan bulanan,
            pembayaran, hingga laporan dan pengaduan.
          </p>
          <p>
            <strong>KOSU</strong> bantu kamu kelola kost tanpa Excel, tanpa
            chat-chat manual, tanpa pusing cari-cari data. Semua hal teknis
            kayak tagihan, reminder, laporan?
          </p>
          <p>
            <strong>KOSU</strong> yang urus. Kamu tinggal pantau.
          </p>
        </div>
      </div>
    </section>
  );
}

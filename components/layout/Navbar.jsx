"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname.startsWith("/dashboard")) return null;
  
  return (
    <header className="w-full px-8 py-4 flex justify-between items-center shadow-sm bg-white">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="KOSU Logo" width={120} height={120} />
        {/* <span className="font-bold text-lg">KOSU</span> */}
      </div>
      <nav className="hidden md:flex gap-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/tentang">Tentang</Link>
        <Link href="/harga">Harga</Link>
        <Link href="/kontak">Kontak</Link>
      </nav>
      <div className="flex gap-2">
        <Link
          href="/login"
          className="bg-gray-300 rounded-md px-4 py-1 text-sm hover:bg-gray-100"
        >
          Masuk
        </Link>
        <Link
          href="/register"
          className="bg-gray-300 rounded-md px-4 py-1 text-sm hover:bg-gray-100"
        >
          Daftar
        </Link>
      </div>
    </header>
  );
}

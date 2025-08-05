import Judul from "../components/Judul";

export default function TentangSection() {
  return (
    <section className="my-5 md:my-20">
      <Judul>Tentang</Judul>
      <div className="text-lg md:text-4xl leading-relaxed space-y-5">
        <p>
          KOSU lahir dari keresahan sederhana: kenapa mengelola kost masih
          seribet itu?
        </p>
        <p>
          Dari tagihan manual, reminder lewat WhatsApp satu-satu, sampai laporan
          keuangan yang nyangkut di Excel — semua itu kami ubah jadi otomatis.
        </p>
        <p>
          Dengan KOSU, pemilik kost bisa kelola kamar, penyewa, pembayaran,
          hingga laporan, semuanya dalam satu dashboard yang simpel dan cerdas.
        </p>
        <p>Tanpa ribet. Tanpa spreadsheet. Tinggal klik — beres.</p>
      </div>
    </section>
  );
}

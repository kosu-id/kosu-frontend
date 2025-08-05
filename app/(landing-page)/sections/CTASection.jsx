import Link from "next/link";

export default function CTASection() {
  return (
    <div className="my-5 md:my-20 flex justify-center">
      <Link
        href="/register"
        className="bg-green-500 text-white md:text-4xl py-4 px-10 rounded-full"
      >
        Coba gratis 3 bulan!
      </Link>
    </div>
  );
}

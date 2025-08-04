import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center py-15">
      {/* Teks Jepang di atas border */}
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-200">
        コス!
      </h1>

      <div className="w-full max-w-md bg-gray-100 rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-semibold mb-6 text-center">Masuk</h1>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="user@kosu.id" />
          </div>

          <Button
            type="submit"
            className="w-full bg-neutral-700 text-white px-5 py-2"
          >
            Kirim kode
          </Button>

          <div className="flex items-center gap-5">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="text-sm text-gray-500">atau</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <Button variant="outline" className="text-sm w-full px-5 py-1 gap-2">
            <FaGoogle className="w-4 h-4" />
            Login dengan Google
          </Button>
        </form>
        <p className="text-sm text-center mt-4">
          Belum punya akun?{" "}
          <Link href="/register" className="underline">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
}

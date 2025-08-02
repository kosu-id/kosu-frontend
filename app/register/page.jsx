import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-200">
        コス!
      </h1>
      <div className="w-full max-w-md bg-gray-100 rounded-xl p-8 shadow-sm">
        <h2 className="text-xl font-medium mb-6 text-center">Daftar</h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Nama</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                <FiUser className="w-4 h-4" />
              </span>
              <Input
                id="name"
                type="text"
                placeholder="Nama Lengkap"
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                <MdOutlineEmail className="w-5 h-5" />
              </span>
              <Input
                id="email"
                type="email"
                placeholder="user@kosu.id"
                className="pl-10"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-black text-white px-5 py-2"
          >
            Daftar
          </Button>

          <div className="flex items-center gap-5">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="text-sm text-gray-500">atau</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <Button variant="outline" className="text-sm w-full px-5 py-1 gap-2">
            <FaGoogle className="w-4 h-4" /> Daftar dengan Google
          </Button>
        </form>
        <p className="text-sm text-center mt-4">
          Sudah punya akun?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

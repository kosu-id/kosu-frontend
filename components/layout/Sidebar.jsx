import { Home, CreditCard, FileText, Lock } from "lucide-react";
import { HiDotsHorizontal } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-100 bg-[#2f2f2f] p-5 gap-y-8 min-h-screen text-white">
      <div className="flex items-center gap-2 mb-18 mt-8">
        <Image src="/logoPng.png" alt="KOSU Logo" width={150} height={150} />
        <span className="text-white font-medium text-[12px] mr-18 top-0">
          basic
        </span>
      </div>
      <span className="px-2 space-y-8 font-medium text-[13px] text-[#A6A6A6]">
        Dashboard
      </span>
      <ul className="space-y-2">
        <li className="group flex items-center font-extrabold gap-2 p-2 rounded-[12px] hover:bg-[#1DC75E] cursor-pointer relative">
          <Home size={18} /> Home
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out">
            <HiDotsHorizontal />
          </span>
        </li>
        <li className="group flex items-center font-extrabold gap-2 p-2 rounded-[12px] hover:bg-[#1DC75E] cursor-pointer relative">
          <CreditCard size={18} /> Billing
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out">
            <HiDotsHorizontal />
          </span>
        </li>
        <li className="group flex items-center font-extrabold gap-2 p-2 rounded-[12px] hover:bg-[#1DC75E] cursor-pointer relative">
          <FileText size={18} /> Laporan Keuangan
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out">
            <HiDotsHorizontal />
          </span>
        </li>
        <li className="flex items-center font-extrabold gap-2 p-2 text-gray-400 cursor-not-allowed">
          <Lock size={18} /> Kelola Properti
        </li>
      </ul>

      <div className="absolute bottom-2 w-90 p-3">
        <div className="flex items-center gap-4 bg-[#242424] rounded-xl p-4 shadow-lg">
          <div className="bg-white rounded-full p-2">
            <Image
              src="/logoCircle.png"
              alt="KOSU Logo"
              width={50}
              height={50}
            />
          </div>

          <div className="flex-1">
            <div className="text-[#b2b29f] text-xs font-medium">
              Farhan Fadholy
            </div>
            <div className="text-white font-bold text-sm">Kost Swandaya 01</div>
          </div>

          <div className="flex flex-col items-center gap-0.3 ml-2">
            <HiChevronUp
              className="flex text-gray-300 mb-[-9px]"
              size={24}
            />
            <HiChevronDown
              className="text-gray-300 mt-[-3px]"
              size={24}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}

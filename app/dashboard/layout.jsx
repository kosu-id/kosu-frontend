import { BsQuestionCircle } from "react-icons/bs";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-400 relative">
      <Sidebar />
      <main className="flex-1 bg-white p-4">{children}</main>

      <div className="absolute bottom-7 right-10 z-50">
        <div className="bg-[#d9d9d9] rounded-full w-[70px] h-[70px] flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
          <BsQuestionCircle className="text-black" size={40} />
        </div>
      </div>
    </div>
  );
}

import { CheckCircle, XCircle } from "lucide-react";

export default function FiturRow({ nama, tanpaKOSU, denganKOSU, index }) {
  const bgClass = index % 2 === 0 ? "bg-green-500 text-white" : "bg-green-300 text-black";

  return (
    <div className={`flex items-center py-4 md:py-6 px-5 my-5 rounded-xl md:text-xl ${bgClass}`}>
      <div className="w-2/3">{nama}</div>
      <div className="w-1/6 md:flex hidden justify-end md:justify-center">
        {tanpaKOSU ? <CheckCircle className="text-black opacity-50" /> : <XCircle className="text-black opacity-50" />}
      </div>
      <div className="w-1/6 flex justify-end md:justify-center">
        {denganKOSU ? <CheckCircle className="text-black" /> : <XCircle className="text-black" />}
      </div>
    </div>
  );
}

import { Card, CardContent } from "@/components/ui/card"

export default function HargaCard({
  nama,
  deskripsi,
  hargaBulanan,
  hargaTahunan,
  fitur = [],
  isYearly,
  ctaText = "Pilih Paket",
}) {
  const harga = isYearly ? hargaTahunan : hargaBulanan
  const hargaLabel = `Rp. ${harga.toLocaleString()}`

  return (
    <Card className="border-0 bg-gray-300 rounded-3xl w-full max-w-sm mx-auto h-full shadow-lg">
      <CardContent className="p-8 flex flex-col justify-between h-full">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-1">{nama}</h2>
          <div className="text-2xl font-bold mb-2">
            {isYearly && hargaBulanan !== 0 ? (
              <>
                <span className="line-through mr-2">Rp. {hargaBulanan.toLocaleString()}</span>
                <span><br/>{hargaLabel}</span>
              </>
            ) : (
              <span>{hargaLabel}</span>
            )}
            <span className="text-base font-normal ml-1">
              /{isYearly ? "tahun" : "bulan"}
            </span>
          </div>
          <p className="text-sm font-semibold text-gray-800">{deskripsi}</p>
        </div>

        <ul className="text-sm text-gray-800 space-y-3 mb-6 pl-2">
          {fitur.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-green-600">✔</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <button className="w-full bg-green-500 hover:bg-green-600 transition text-white text-sm font-semibold py-3 rounded-full">
          {ctaText}
        </button>
      </CardContent>
    </Card>
  )
}

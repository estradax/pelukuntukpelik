import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MessageCircle, AlertTriangle, Clock, Heart, Shield } from "lucide-react"
import Link from "next/link"

const emergencyContacts = [
  {
    name: "Hotline Perlindungan Anak Nasional",
    number: "119",
    description: "Dukungan krisis 24/7 untuk anak dan keluarga",
    type: "call",
  },
  {
    name: "Pusat Krisis Perempuan & Anak",
    number: "021-7270005",
    description: "Dukungan khusus untuk penyintas kekerasan seksual",
    type: "call",
  },
  {
    name: "Crisis Text Line",
    number: "Kirim BANTUAN ke 741741",
    description: "Dukungan krisis gratis dan rahasia via SMS",
    type: "text",
  },
  {
    name: "Layanan Darurat",
    number: "112",
    description: "Untuk bahaya fisik langsung atau darurat medis",
    type: "emergency",
  },
]

const safetyTips = [
  "Jika kamu dalam bahaya fisik langsung, hubungi SAPA 129 atau pergi ke lokasi teraman terdekat",
  "Percayai instingmu - jika ada yang terasa salah, segera cari bantuan",
  "Simpan nomor telepon penting di ponselmu atau tulis di tempat aman",
  "Miliki rencana keamanan - ketahui ke mana kamu bisa pergi dan siapa yang bisa dihubungi",
  "Ingat: ini bukan salahmu, dan bantuan selalu tersedia",
]

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFE6E6] to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-red-200">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-[#5BA4CF]" />
            <span className="font-semibold text-[#5BA4CF]">Peluk untuk Pelik</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Emergency Alert */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-red-800">Bantuan Darurat & Dukungan Krisis</h1>
          </div>
          <p className="text-red-700 text-lg">
            Jika kamu dalam bahaya langsung, segera hubungi layanan darurat SAPA 129 atau pergi ke lokasi teraman terdekat.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-6 text-center">
              <Phone className="h-12 w-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-xl font-bold text-red-800 mb-2">Hubungi Bantuan Sekarang</h3>
              <p className="text-red-700 mb-4">Bicara langsung dengan konselor krisis</p>
              <a href="tel:119">
                <Button className="bg-red-500 hover:bg-red-600 text-white w-full text-lg py-3">
                  Hubungi 119 - Perlindungan Anak
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="border-[#5BA4CF]/20 bg-[#D6ECFA]/30">
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 text-[#5BA4CF]" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">SMS untuk Dukungan</h3>
              <p className="text-gray-600 mb-4">Dapatkan bantuan melalui pesan rahasia</p>
              <a href="sms:741741?body=BANTUAN">
                <Button className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white w-full text-lg py-3">
                  SMS BANTUAN ke 741741
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Crisis Contacts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Phone className="h-6 w-6 text-[#5BA4CF]" />
              Hotline Krisis & Dukungan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{contact.name}</h4>
                    <p className="text-gray-600 text-sm">{contact.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-[#5BA4CF] mb-2">{contact.number}</p>
                    {contact.type === "call" && (
                      <a href={`tel:${contact.number.replace(/\D/g, "")}`}>
                        <Button size="sm" className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white">
                          <Phone className="h-4 w-4 mr-1" />
                          Hubungi Sekarang
                        </Button>
                      </a>
                    )}
                    {contact.type === "text" && (
                      <a href="sms:741741?body=BANTUAN">
                        <Button size="sm" className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          SMS Sekarang
                        </Button>
                      </a>
                    )}
                    {contact.type === "emergency" && (
                      <a href="tel:112">
                        <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                          <Phone className="h-4 w-4 mr-1" />
                          Darurat
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Safety Planning */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Shield className="h-6 w-6 text-[#5BA4CF]" />
              Tips Keamanan & Perencanaan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {safetyTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#5BA4CF] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 24/7 Support */}
        <Card className="bg-[#D6ECFA]/30 border-[#A3CFF2]/20">
          <CardContent className="p-8 text-center">
            <Clock className="h-12 w-12 mx-auto mb-4 text-[#5BA4CF]" />
            <h3 className="text-xl font-bold text-gray-800 mb-4">Dukungan 24/7 Tersedia</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Kamu tidak harus menghadapi ini sendirian. Dukungan krisis tersedia sepanjang waktu, setiap hari dalam
              setahun. Konselor terlatih siap mendengarkan, mempercayaimu, dan membantumu tetap aman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/report">
                <Button
                  variant="outline"
                  className="border-[#5BA4CF] text-[#5BA4CF] hover:bg-[#D6ECFA] px-6 py-3 rounded-full"
                >
                  Buat Laporan
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Important Reminder */}
        <div className="mt-8 text-center">
          <div className="bg-[#FFE6E6] p-6 rounded-lg">
            <Heart className="h-8 w-8 mx-auto mb-3 text-[#5BA4CF]" />
            <h3 className="font-bold text-gray-800 mb-2">Ingat: Kamu Tidak Sendirian</h3>
            <p className="text-gray-700">
              Apa yang terjadi padamu bukan salahmu. Kamu berani karena mencari bantuan. Ada orang yang peduli padamu
              dan ingin mendukung perjalanan penyembuhanmu.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

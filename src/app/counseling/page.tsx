import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Video, Calendar, Star, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const counselors = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    specialization: "Trauma Anak & PTSD",
    experience: "8 tahun",
    languages: ["Bahasa Indonesia", "English"],
    rating: 4.9,
    availability: "Tersedia Hari Ini",
    bio: "Dr. Chen mengkhususkan diri dalam terapi trauma-informed untuk anak dan remaja. Beliau menciptakan ruang yang aman dan tanpa penghakiman untuk penyembuhan.",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 2,
    name: "Dr. Ahmad Rahman",
    specialization: "Terapi Keluarga & Dukungan",
    experience: "12 tahun",
    languages: ["Bahasa Indonesia", "English", "Arabic"],
    rating: 4.8,
    availability: "Tersedia Besok",
    bio: "Dr. Rahman bekerja dengan penyintas dan keluarga mereka, membantu membangun kembali kepercayaan dan komunikasi dalam lingkungan yang mendukung.",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 3,
    name: "Dr. Maya Sari",
    specialization: "Psikologi Remaja",
    experience: "6 tahun",
    languages: ["Bahasa Indonesia", "English"],
    rating: 4.9,
    availability: "Tersedia Hari Ini",
    bio: "Dr. Sari fokus membantu remaja memproses trauma dan mengembangkan strategi koping yang sehat untuk perjalanan pemulihan mereka.",
    image: "/placeholder.svg?height=120&width=120",
  },
]

export default function CounselingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D6ECFA] to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-[#A3CFF2]/20">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-[#5BA4CF]" />
            <span className="font-semibold text-[#5BA4CF]">Peluk untuk Pelik</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-[#D6ECFA] rounded-full flex items-center justify-center">
            <MessageCircle className="h-10 w-10 text-[#5BA4CF]" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Dukungan Konseling Profesional</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Terhubung dengan profesional kesehatan mental terlatih yang memahami trauma dan siap mendukung perjalanan
            penyembuhanmu. Semua sesi bersifat rahasia dan trauma-informed.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Cara Kerja Konseling Kami</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-[#A3CFF2]/20 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#D6ECFA] rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-[#5BA4CF]" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">1. Pilih Konselormu</h3>
                <p className="text-gray-600 text-sm">
                  Jelajahi konselor berkualitas kami dan pilih seseorang yang membuatmu merasa nyaman.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#A3CFF2]/20 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#D6ECFA] rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-[#5BA4CF]" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">2. Jadwalkan Sesimu</h3>
                <p className="text-gray-600 text-sm">
                  Jadwalkan sesi yang cocok untukmu - chat, video call, atau telepon.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#A3CFF2]/20 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#D6ECFA] rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-[#5BA4CF]" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">3. Mulai Penyembuhan</h3>
                <p className="text-gray-600 text-sm">
                  Mulai perjalananmu dalam lingkungan yang aman, mendukung, dan rahasia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Counselors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Kenali Konselor Kami</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {counselors.map((counselor) => (
              <Card key={counselor.id} className="border-[#A3CFF2]/20 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-[#D6ECFA]">
                    <Image
                      src={counselor.image || "/placeholder.svg"}
                      alt={counselor.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg text-gray-800">{counselor.name}</CardTitle>
                  <p className="text-[#5BA4CF] font-medium">{counselor.specialization}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Pengalaman:</span>
                    <span className="font-medium">{counselor.experience}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{counselor.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Bahasa:</span>
                    <div className="flex gap-1 flex-wrap">
                      {counselor.languages.map((lang) => (
                        <Badge key={lang} variant="secondary" className="text-xs bg-[#D6ECFA] text-[#5BA4CF]">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-green-500" />
                    <span className="text-green-600 font-medium">{counselor.availability}</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">{counselor.bio}</p>

                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white text-sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Sesi Chat
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-[#5BA4CF] text-[#5BA4CF] hover:bg-[#D6ECFA] text-sm"
                    >
                      <Video className="h-4 w-4 mr-2" />
                      Video Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Privacy & Safety */}
        <Card className="border-[#A3CFF2]/20 bg-[#D6ECFA]/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Privasi & Keamananmu</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Kerahasiaan</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Semua sesi sepenuhnya rahasia</li>
                  <li>• Informasimu dienkripsi dan aman</li>
                  <li>• Tidak ada rekaman sesi tanpa persetujuanmu</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Standar Profesional</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Semua konselor adalah profesional berlisensi</li>
                  <li>• Pelatihan khusus dalam terapi trauma</li>
                  <li>• Supervisi rutin dan pendidikan berkelanjutan</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Support */}
        <div className="mt-8 text-center">
          <div className="bg-[#FFE6E6] p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Butuh Dukungan Segera?</h3>
            <p className="text-gray-600 mb-4">
              Jika kamu dalam krisis atau butuh bantuan segera, jangan tunggu sesi terjadwal.
            </p>
            <Link href="/emergency">
              <Button className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white px-6 py-3 rounded-full">
                Dapatkan Bantuan Darurat Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Phone, BookOpen, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D6ECFA] to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-[#A3CFF2]/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-[#5BA4CF]" />
              <span className="text-xl font-semibold text-[#5BA4CF]">Peluk untuk Pelik</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/about" className="text-gray-700 hover:text-[#5BA4CF] transition-colors">
                Tentang Kami
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-[#5BA4CF] transition-colors">
                Sumber Daya
              </Link>
              <Link
                href="/emergency"
                className="bg-[#FFE6E6] text-[#5BA4CF] px-4 py-2 rounded-full hover:bg-[#FFE6E6]/80 transition-colors"
              >
                Bantuan Darurat
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-[#A3CFF2]/20 rounded-full flex items-center justify-center">
              <Heart className="h-16 w-16 text-[#5BA4CF]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              A Safe Hug in a Difficult Time
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Kamu tidak sendirian. Kami percaya padamu. Ceritamu penting. Ini adalah ruang aman di mana kamu bisa
              berbicara dengan bebas dan menemukan dukungan yang kamu butuhkan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/report">
              <Button className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white px-8 py-4 text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
                Mulai Ceritakan Kisahmu
              </Button>
            </Link>
            <Link href="/emergency">
              <Button
                variant="outline"
                className="border-[#FFE6E6] text-[#5BA4CF] hover:bg-[#FFE6E6] px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                Butuh Bantuan Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Bagaimana Kami Dapat Membantumu</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-[#A3CFF2]/20 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#D6ECFA] rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-[#5BA4CF]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Pelaporan Anonim</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bagikan ceritamu dengan aman dan anonim. Kamu yang mengontrol apa yang ingin dibagikan dan kapan.
                </p>
                <Link href="/report">
                  <Button variant="ghost" className="mt-4 text-[#5BA4CF] hover:bg-[#D6ECFA]">
                    Pelajari Lebih Lanjut
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-[#A3CFF2]/20 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#D6ECFA] rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-[#5BA4CF]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Sumber Daya Edukasi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Akses informasi bermanfaat tentang penyembuhan, hak-hakmu, dan cara mendukung diri sendiri dan orang
                  lain.
                </p>
                <Link href="/resources">
                  <Button variant="ghost" className="mt-4 text-[#5BA4CF] hover:bg-[#D6ECFA]">
                    Jelajahi Sumber Daya
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Message */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#D6ECFA] to-[#A3CFF2]/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Kamu Berani. Kamu Kuat.</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Mengambil langkah pertama untuk mencari bantuan membutuhkan keberanian yang luar biasa. Kami di sini untuk
            berjalan bersamamu dalam perjalanan menuju penyembuhan. Setiap cerita yang dibagikan membantu menciptakan
            dunia yang lebih aman untuk semua anak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <Button
                variant="outline"
                className="border-[#5BA4CF] text-[#5BA4CF] hover:bg-[#5BA4CF] hover:text-white px-6 py-3 rounded-full"
              >
                Pelajari Misi Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Help Banner */}
      <section className="py-8 px-4 bg-[#FFE6E6]">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Butuh Bantuan Segera?</h3>
              <p className="text-gray-600">Dukungan krisis tersedia 24/7. Kamu tidak harus menghadapi ini sendirian.</p>
            </div>
            <Link href="/emergency">
              <Button className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white px-6 py-3 rounded-full flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Dapatkan Bantuan Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#A3CFF2]/20 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-[#5BA4CF]" />
                <span className="font-semibold text-[#5BA4CF]">Peluk untuk Pelik</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sebuah tempat perlindungan digital yang menyediakan ruang aman dan suportif untuk korban muda kekerasan
                seksual.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Dukungan</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/report" className="text-gray-600 hover:text-[#5BA4CF]">
                    Pelaporan Anonim
                  </Link>
                </li>
                <li>
                  <Link href="/emergency" className="text-gray-600 hover:text-[#5BA4CF]">
                    Bantuan Darurat
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Sumber Daya</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/resources" className="text-gray-600 hover:text-[#5BA4CF]">
                    Konten Edukasi
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-[#5BA4CF]">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-[#5BA4CF]">
                    Kebijakan Privasi
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Hotline Krisis</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-600">Nasional: 119</li>
                <li className="text-gray-600">Perlindungan Anak: 129</li>
                <li className="text-gray-600">Krisis Perempuan: 021-7270005</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#A3CFF2]/20 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              © 2024 Peluk untuk Pelik. Semua hak dilindungi. Privasi dan keamananmu adalah prioritas kami.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

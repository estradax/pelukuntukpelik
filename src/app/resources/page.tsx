import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Search, Heart, Users, Scale, Shield, Clock, Download } from "lucide-react"
import Link from "next/link"

const resourceCategories = [
  {
    title: "Memahami Trauma",
    icon: Heart,
    color: "bg-[#D6ECFA]",
    articles: [
      {
        title: "Apa itu Trauma? Panduan untuk Anak Muda",
        description: "Memahami apa itu trauma dan bagaimana pengaruhnya terhadap pikiran dan tubuhmu",
        readTime: "5 menit baca",
        type: "Artikel",
      },
      {
        title: "Penyembuhan itu Mungkin: Perjalananmu ke Depan",
        description: "Harapan dan dorongan untuk penyintas dalam perjalanan menuju pemulihan",
        readTime: "7 menit baca",
        type: "Artikel",
      },
      {
        title: "Reaksi Umum terhadap Trauma",
        description: "Respons normal terhadap pengalaman traumatis dan kapan harus mencari bantuan",
        readTime: "6 menit baca",
        type: "Artikel",
      },
    ],
  },
  {
    title: "Perawatan Diri & Coping",
    icon: Shield,
    color: "bg-[#FFE6E6]",
    articles: [
      {
        title: "Latihan Pernapasan untuk Kecemasan",
        description: "Teknik sederhana untuk membantu menenangkan pikiran dan tubuhmu",
        readTime: "3 menit baca",
        type: "Video",
      },
      {
        title: "Membuat Rencana Keamanan",
        description: "Langkah-langkah untuk membantumu merasa lebih aman dan terkendali",
        readTime: "8 menit baca",
        type: "Panduan",
      },
      {
        title: "Teknik Grounding",
        description: "Cara untuk tetap hadir saat merasa kewalahan",
        readTime: "4 menit baca",
        type: "Artikel",
      },
    ],
  },
  {
    title: "Ketahui Hak-hakmu",
    icon: Scale,
    color: "bg-[#E7DFFF]",
    articles: [
      {
        title: "Hak Hukummu sebagai Penyintas",
        description: "Memahami hak-hak dan perlindungan hukummu",
        readTime: "10 menit baca",
        type: "Panduan",
      },
      {
        title: "Opsi Pelaporan Dijelaskan",
        description: "Berbagai cara melaporkan pelecehan dan apa yang bisa diharapkan",
        readTime: "8 menit baca",
        type: "Artikel",
      },
      {
        title: "Bekerja dengan Penegak Hukum",
        description: "Apa yang terjadi ketika kamu melaporkan ke polisi",
        readTime: "6 menit baca",
        type: "Panduan",
      },
    ],
  },
  {
    title: "Mendukung Orang Lain",
    icon: Users,
    color: "bg-[#D6ECFA]",
    articles: [
      {
        title: "Cara Mendukung Teman yang Terluka",
        description: "Hadir untuk seseorang yang mengalami pelecehan",
        readTime: "7 menit baca",
        type: "Artikel",
      },
      {
        title: "Untuk Orang Tua: Mendukung Anakmu",
        description: "Bagaimana keluarga dapat membantu dalam proses penyembuhan",
        readTime: "12 menit baca",
        type: "Panduan",
      },
      {
        title: "Menciptakan Ruang Aman",
        description: "Membangun lingkungan di mana penyintas merasa didukung",
        readTime: "5 menit baca",
        type: "Artikel",
      },
    ],
  },
]

export default function ResourcesPage() {
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
            <BookOpen className="h-10 w-10 text-[#5BA4CF]" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sumber Daya Edukasi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pengetahuan adalah kekuatan. Jelajahi artikel, panduan, dan video yang dirancang untuk membantumu memahami
            trauma, mengetahui hak-hakmu, dan mendukung perjalanan penyembuhanmu.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Cari sumber daya, topik, atau pertanyaan..."
              className="pl-10 py-3 text-lg border-[#A3CFF2]/30 focus:border-[#5BA4CF]"
            />
          </div>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {resourceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center`}>
                  <category.icon className="h-6 w-6 text-[#5BA4CF]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.articles.map((article, articleIndex) => (
                  <Card
                    key={articleIndex}
                    className="border-[#A3CFF2]/20 hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-[#D6ECFA] text-[#5BA4CF] text-xs">
                          {article.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{article.description}</p>
                      <Button variant="ghost" className="text-[#5BA4CF] hover:bg-[#D6ECFA] p-0 h-auto">
                        Baca Selengkapnya →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Downloads */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Unduhan Bermanfaat</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-[#A3CFF2]/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D6ECFA] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Download className="h-6 w-6 text-[#5BA4CF]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">Lembar Kerja Perencanaan Keamanan</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Panduan langkah demi langkah untuk membuat rencana keamanan personalmu
                    </p>
                    <Button size="sm" className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white">
                      Unduh PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#A3CFF2]/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFE6E6] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-[#5BA4CF]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">Checklist Perawatan Diri</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Aktivitas harian dan mingguan untuk mendukung kesejahteraanmu
                    </p>
                    <Button size="sm" className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white">
                      Unduh PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Message */}
        <Card className="mt-12 bg-[#D6ECFA]/30 border-[#A3CFF2]/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Butuh Dukungan Lebih?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Belajar tentang trauma dan penyembuhan adalah langkah penting, tapi kamu tidak harus menavigasi perjalanan
              ini sendirian. Dukungan profesional tersedia kapan pun kamu siap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/counseling">
                <Button className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white px-6 py-3 rounded-full">
                  Bicara dengan Konselor
                </Button>
              </Link>
              <Link href="/report">
                <Button
                  variant="outline"
                  className="border-[#5BA4CF] text-[#5BA4CF] hover:bg-[#D6ECFA] px-6 py-3 rounded-full"
                >
                  Bagikan Ceritamu
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Reminder */}
        <div className="mt-8 text-center">
          <div className="bg-[#FFE6E6] p-4 rounded-lg">
            <p className="text-gray-700 mb-2">
              <strong>Ingat:</strong> Jika kamu butuh bantuan segera, dukungan krisis tersedia 24/7.
            </p>
            <Link href="/emergency">
              <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 rounded-full">
                Dapatkan Bantuan Darurat
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


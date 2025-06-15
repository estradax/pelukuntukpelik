"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Heart, Shield, ArrowLeft, ArrowRight, Save } from "lucide-react"
import Link from "next/link"

export default function ReportPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    story: "",
    location: "",
    timeframe: "",
    contactConsent: false,
    supportNeeded: false,
  })

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSaveDraft = () => {
    alert("Draf kamu telah disimpan dengan aman. Kamu bisa kembali kapan saja untuk melanjutkan.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D6ECFA] to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-[#A3CFF2]/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-[#5BA4CF]" />
              <span className="font-semibold text-[#5BA4CF]">Peluk untuk Pelik</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-3xl px-4 py-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">
              Langkah {currentStep} dari {totalSteps}
            </span>
            <span className="text-sm text-gray-600">{Math.round(progress)}% Selesai</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="border-[#A3CFF2]/20 shadow-lg">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#D6ECFA] rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-[#5BA4CF]" />
            </div>
            <CardTitle className="text-2xl text-gray-800">Bagikan Ceritamu dengan Aman</CardTitle>
            <p className="text-gray-600 mt-2">
              Kamu yang mengontrol. Bagikan hanya yang membuatmu nyaman. Kamu bisa melewati pertanyaan apa pun atau
              berhenti kapan saja.
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="bg-[#D6ECFA]/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Sebelum Kita Mulai</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Laporanmu sepenuhnya anonim kecuali kamu memilih sebaliknya</li>
                    <li>• Semua informasi dienkripsi dan aman</li>
                    <li>• Kamu bisa melewati pertanyaan yang membuatmu tidak nyaman</li>
                  </ul>
                </div>

                <div>
                  <Label className="text-base font-medium text-gray-800 mb-3 block">
                    Apakah kamu ingin menceritakan apa yang terjadi? (Opsional)
                  </Label>
                  <Textarea
                    placeholder="Bagikan sebanyak atau sesedikit yang membuatmu nyaman. Tidak ada tekanan untuk menyertakan detail spesifik."
                    className="min-h-32 border-[#A3CFF2]/30 focus:border-[#5BA4CF]"
                    value={formData.story}
                    onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                  />
                  <p className="text-xs text-gray-500 mt-2">Ingat: Kamu berani karena berbagi. Setiap kata penting.</p>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium text-gray-800 mb-3 block">
                    Di mana ini terjadi? (Opsional)
                  </Label>
                  <Input
                    placeholder="Lokasi umum (mis. sekolah, rumah, pusat komunitas) - tidak perlu alamat spesifik"
                    className="border-[#A3CFF2]/30 focus:border-[#5BA4CF]"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                <div>
                  <Label className="text-base font-medium text-gray-800 mb-3 block">
                    Kapan ini terjadi? (Opsional)
                  </Label>
                  <Input
                    placeholder="Perkiraan waktu (mis. bulan lalu, tahun ini, beberapa tahun lalu)"
                    className="border-[#A3CFF2]/30 focus:border-[#5BA4CF]"
                    value={formData.timeframe}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                  />
                </div>

                <div className="bg-[#FFE6E6]/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Ingat:</strong> Kamu tidak perlu memberikan detail yang tepat. Informasi umum membantu kami
                    memahami cara memberikan dukungan yang lebih baik untuk penyintas sepertimu.
                  </p>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800">Bagaimana Kami Bisa Mendukungmu?</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="support"
                      checked={formData.supportNeeded}
                      onCheckedChange={(checked) => setFormData({ ...formData, supportNeeded: checked as boolean })}
                    />
                    <div>
                      <Label htmlFor="support" className="text-base font-medium text-gray-800">
                        Saya ingin terhubung dengan konselor
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">
                        Kami bisa menghubungkanmu dengan profesional terlatih yang khusus mendukung penyintas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="contact"
                      checked={formData.contactConsent}
                      onCheckedChange={(checked) => setFormData({ ...formData, contactConsent: checked as boolean })}
                    />
                    <div>
                      <Label htmlFor="contact" className="text-base font-medium text-gray-800">
                        Boleh menghubungi saya tentang laporan ini
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">
                        Centang ini hanya jika kamu ingin kami bisa menindaklanjuti. Laporanmu tetap akan diproses
                        meskipun kamu tidak mencentang ini.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#D6ECFA]/30 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Pilihanmu:</strong> Opsi ini sepenuhnya terserah kamu. Laporanmu berharga terlepas dari apa
                    yang kamu pilih di sini.
                  </p>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6 text-center">
                <div className="w-20 h-20 mx-auto bg-[#D6ECFA] rounded-full flex items-center justify-center">
                  <Heart className="h-10 w-10 text-[#5BA4CF]" />
                </div>

                <h3 className="text-xl font-semibold text-gray-800">Terima Kasih atas Keberanianmu</h3>

                <div className="bg-[#D6ECFA]/30 p-6 rounded-lg text-left">
                  <h4 className="font-semibold text-gray-800 mb-3">Apa yang Terjadi Selanjutnya:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Laporanmu telah dikirim dengan aman dan dienkripsi</li>
                    <li>• Tim kami akan meninjau laporanmu dengan hati-hati dan hormat</li>
                    <li>• Jika kamu meminta dukungan, konselor akan menghubungi dalam 24 jam</li>
                    <li>• Kamu selalu bisa kembali untuk mengakses lebih banyak sumber daya atau dukungan</li>
                  </ul>
                </div>

                <p className="text-gray-600">
                  Kamu telah mengambil langkah berani hari ini. Ingat: kamu tidak sendirian, kami percaya padamu, dan
                  ceritamu penting.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/counseling">
                    <Button className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white px-6 py-3 rounded-full">
                      Terhubung dengan Konselor
                    </Button>
                  </Link>
                  <Link href="/resources">
                    <Button
                      variant="outline"
                      className="border-[#5BA4CF] text-[#5BA4CF] hover:bg-[#D6ECFA] px-6 py-3 rounded-full"
                    >
                      Jelajahi Sumber Daya
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {/* Navigation */}
            {currentStep < 4 && (
              <div className="flex justify-between pt-6 border-t border-[#A3CFF2]/20">
                <Button
                  variant="ghost"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="text-[#5BA4CF] hover:bg-[#D6ECFA]"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Sebelumnya
                </Button>

                <div className="flex gap-2">
                  <Button variant="outline" className="border-[#A3CFF2] text-[#5BA4CF] hover:bg-[#D6ECFA]">
                    Lewati Langkah Ini
                  </Button>
                  <Button onClick={handleNext} className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white">
                    {currentStep === 3 ? "Kirim Laporan" : "Lanjutkan"}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Support Message */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">Butuh bantuan segera? Dukungan krisis tersedia 24/7.</p>
          <Link href="/emergency">
            <Button variant="outline" className="border-[#FFE6E6] text-[#5BA4CF] hover:bg-[#FFE6E6] rounded-full">
              Dapatkan Bantuan Darurat
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

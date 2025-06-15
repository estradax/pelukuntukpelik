import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Users, Target, Award, CheckCircle, Scale, BookOpen, Eye } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "Every interaction is guided by empathy, understanding, and genuine care for survivors.",
  },
  {
    icon: Shield,
    title: "Safety & Privacy",
    description: "Your safety, privacy, and confidentiality are our highest priorities in everything we do.",
  },
  {
    icon: Users,
    title: "Trauma-Informed Care",
    description: "Our approach recognizes the impact of trauma and prioritizes healing and empowerment.",
  },
  {
    icon: Target,
    title: "Survivor-Centered",
    description: "Survivors are at the center of all decisions, maintaining control over their own journey.",
  },
]

const objectives = [
  {
    title: "Perlindungan Anak",
    description:
      "Memberikan perlindungan komprehensif bagi anak dan remaja korban kekerasan seksual melalui layanan konseling, pelaporan anonim, dan dukungan psikososial.",
  },
  {
    title: "Pemulihan Trauma",
    description:
      "Memfasilitasi proses pemulihan trauma dengan pendekatan yang sensitif dan berbasis bukti ilmiah untuk membantu korban membangun kembali kepercayaan diri.",
  },
  {
    title: "Pemberdayaan",
    description:
      "Memberdayakan korban dengan memberikan pengetahuan tentang hak-hak mereka, akses terhadap keadilan, dan keterampilan untuk membangun masa depan yang lebih baik.",
  },
  {
    title: "Edukasi Masyarakat",
    description:
      "Meningkatkan kesadaran masyarakat tentang pencegahan kekerasan seksual terhadap anak dan cara mendukung korban dengan tepat.",
  },
  {
    title: "Dukungan Keluarga",
    description:
      "Memberikan dukungan dan edukasi kepada keluarga korban untuk menciptakan lingkungan yang mendukung proses pemulihan.",
  },
  {
    title: "Memulihkan Keberfungsian Sosial Korban",
    description:
      "Membantu korban kekerasan seksual kembali percaya diri dan terhubung dengan lingkungan sosialnya.",
  },
]

const legalFoundations = {
  national: [
    "UU No. 35 Tahun 2014 tentang Perlindungan Anak",
    "UU No. 12 Tahun 2022 tentang Tindak Pidana Kekerasan Seksual",
    "UU No. 11 Tahun 2012 tentang Sistem Peradilan Pidana Anak",
    "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi",
    "Peraturan Pemerintah No. 78 Tahun 2021 tentang Perlindungan Khusus Anak",
  ],
  international: [
    "Konvensi Hak Anak (Convention on the Rights of the Child)",
    "CEDAW (Convention on the Elimination of All Forms of Discrimination Against Women)",
    "Sustainable Development Goals (SDGs) Target 5.2 dan 16.2",
    "Protokol Opsional Konvensi Hak Anak tentang Penjualan Anak, Prostitusi Anak, dan Pornografi Anak",
  ],
}

const team = [
  {
    name: "Dr. Sari Wijaya",
    role: "Clinical Director",
    description: "Child psychologist with 15 years of experience in trauma therapy and survivor advocacy.",
  },
  {
    name: "Ahmad Pratama",
    role: "Program Manager",
    description: "Social worker specializing in crisis intervention and community outreach programs.",
  },
  {
    name: "Maya Chen",
    role: "Legal Advocate",
    description: "Attorney focused on children's rights and supporting survivors through legal processes.",
  },
  {
    name: "Dr. Rina Sari",
    role: "Research Coordinator",
    description: "Researcher working to improve trauma-informed care and prevention programs.",
  },
]

const achievements = [
  "Over 1,000 survivors supported since 2020",
  "24/7 crisis support available in multiple languages",
  "Partnership with 50+ local organizations",
  "95% of users report feeling safer after using our services",
  "Trained over 200 professionals in trauma-informed care",
]

export default function AboutPage() {
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
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-[#D6ECFA] rounded-full flex items-center justify-center">
            <Heart className="h-12 w-12 text-[#5BA4CF]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Peluk untuk Pelik</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a digital sanctuary dedicated to providing safe, supportive, and non-judgmental space for children
            and young survivors of sexual violence. Our mission is to offer hope, healing, and empowerment through
            compassionate care and professional support.
          </p>
        </div>

        {/* Visi & Misi */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Visi & Misi</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-[#A3CFF2]/20 bg-gradient-to-br from-[#D6ECFA]/30 to-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#D6ECFA] rounded-full flex items-center justify-center">
                    <Eye className="h-6 w-6 text-[#5BA4CF]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Visi</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Menjadi platform digital terdepan yang menyediakan ruang aman, suportif, dan bebas dari penghakiman
                  bagi anak dan remaja korban kekerasan seksual, serta menciptakan masyarakat yang peduli dan responsif
                  terhadap perlindungan anak.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#A3CFF2]/20 bg-gradient-to-br from-[#FFE6E6]/30 to-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#FFE6E6] rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-[#5BA4CF]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Misi</h3>
                </div>
                <ul className="text-gray-700 space-y-2 text-sm leading-relaxed">
                  <li>• Menyediakan layanan konseling profesional yang trauma-informed dan mudah diakses</li>
                  <li>• Memfasilitasi pelaporan anonim yang aman dan terpercaya</li>
                  <li>• Memberikan edukasi dan sumber daya untuk pemulihan trauma</li>
                  <li>• Mendukung advokasi hukum dan perlindungan hak-hak korban</li>
                  <li>• Membangun jaringan dukungan komunitas yang kuat</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tujuan */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tujuan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <Card key={index} className="border-[#A3CFF2]/20 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 bg-[#D6ECFA] rounded-full flex items-center justify-center">
                    <span className="text-[#5BA4CF] font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{objective.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Landasan Hukum */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Landasan Hukum</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-[#A3CFF2]/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#D6ECFA] rounded-full flex items-center justify-center">
                    <Scale className="h-6 w-6 text-[#5BA4CF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Hukum Nasional</h3>
                </div>
                <ul className="space-y-2">
                  {legalFoundations.national.map((law, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#5BA4CF] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{law}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#A3CFF2]/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#E7DFFF] rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-[#5BA4CF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Konvensi Internasional</h3>
                </div>
                <ul className="space-y-2">
                  {legalFoundations.international.map((convention, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#5BA4CF] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{convention}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 border-[#A3CFF2]/20 bg-[#D6ECFA]/20">
            <CardContent className="p-6">
              <p className="text-gray-700 text-center leading-relaxed">
                <strong>Komitmen Kami:</strong> Peluk untuk Pelik beroperasi dengan mematuhi seluruh peraturan
                perundang-undangan yang berlaku dan standar internasional untuk memastikan perlindungan, keamanan, dan
                kerahasiaan data serta layanan yang diberikan kepada korban.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 border-[#A3CFF2]/20 bg-gradient-to-r from-[#D6ECFA]/30 to-[#A3CFF2]/10">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              To create a world where every child and young person who has experienced sexual violence feels heard,
              believed, and supported. We provide accessible, trauma-informed resources and professional support to help
              survivors reclaim their strength and build a path toward healing.
            </p>
          </CardContent>
        </Card>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-[#A3CFF2]/20 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#D6ECFA] rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-[#5BA4CF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Impact</h2>
          <Card className="border-[#A3CFF2]/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="border-[#A3CFF2]/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-[#D6ECFA] rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-8 w-8 text-[#5BA4CF]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                      <p className="text-[#5BA4CF] font-medium mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <Card className="mb-16 border-[#A3CFF2]/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Trauma-Informed Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#FFE6E6] rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-[#5BA4CF]" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Safety First</h3>
                <p className="text-gray-600 text-sm">
                  Creating physical and emotional safety in all interactions and services.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#E7DFFF] rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#5BA4CF]" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Working together with survivors to make decisions about their care and healing.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#D6ECFA] rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-[#5BA4CF]" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Empowerment</h3>
                <p className="text-gray-600 text-sm">
                  Supporting survivors to rebuild their sense of control and personal power.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-[#D6ECFA]/30 border-[#A3CFF2]/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Take the Next Step?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you're seeking support for yourself or someone you care about, we're here to help. Every journey
              begins with a single step, and we're honored to walk alongside you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/report">
                <Button className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white px-8 py-3 rounded-full">
                  Share Your Story
                </Button>
              </Link>
              <Link href="/counseling">
                <Button
                  variant="outline"
                  className="border-[#5BA4CF] text-[#5BA4CF] hover:bg-[#D6ECFA] px-8 py-3 rounded-full"
                >
                  Find Support
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-4">Have questions about our services or want to learn more about our work?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <span className="text-gray-600">Email: support@pelukuntukpelik.org</span>
            <span className="text-gray-600">Crisis Line: 119 (24/7)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

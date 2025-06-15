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
    specialization: "Child Trauma & PTSD",
    experience: "8 years",
    languages: ["English", "Indonesian"],
    rating: 4.9,
    availability: "Available Today",
    bio: "Dr. Chen specializes in trauma-informed therapy for children and adolescents. She creates a safe, non-judgmental space for healing.",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 2,
    name: "Dr. Ahmad Rahman",
    specialization: "Family Therapy & Support",
    experience: "12 years",
    languages: ["Indonesian", "English", "Arabic"],
    rating: 4.8,
    availability: "Available Tomorrow",
    bio: "Dr. Rahman works with survivors and their families, helping rebuild trust and communication in a supportive environment.",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 3,
    name: "Dr. Maya Sari",
    specialization: "Adolescent Psychology",
    experience: "6 years",
    languages: ["Indonesian", "English"],
    rating: 4.9,
    availability: "Available Today",
    bio: "Dr. Sari focuses on helping teenagers process trauma and develop healthy coping strategies for their journey to recovery.",
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Professional Counseling Support</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with trained mental health professionals who understand trauma and are here to support your healing
            journey. All sessions are confidential and trauma-informed.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">How Our Counseling Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-[#A3CFF2]/20 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#D6ECFA] rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-[#5BA4CF]" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">1. Choose Your Counselor</h3>
                <p className="text-gray-600 text-sm">
                  Browse our qualified counselors and select someone you feel comfortable with.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#A3CFF2]/20 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#D6ECFA] rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-[#5BA4CF]" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">2. Book Your Session</h3>
                <p className="text-gray-600 text-sm">
                  Schedule a session that works for you - chat, video call, or phone.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#A3CFF2]/20 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#D6ECFA] rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-[#5BA4CF]" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">3. Start Healing</h3>
                <p className="text-gray-600 text-sm">
                  Begin your journey in a safe, supportive, and confidential environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Counselors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Meet Our Counselors</h2>
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
                    <span className="text-gray-600">Experience:</span>
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
                    <span className="text-gray-600">Languages:</span>
                    <div className="flex gap-1">
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
                      Chat Session
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
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Your Privacy & Safety</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Confidentiality</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• All sessions are completely confidential</li>
                  <li>• Your information is encrypted and secure</li>
                  <li>• No session recordings without your consent</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Professional Standards</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• All counselors are licensed professionals</li>
                  <li>• Specialized training in trauma therapy</li>
                  <li>• Regular supervision and continuing education</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Support */}
        <div className="mt-8 text-center">
          <div className="bg-[#FFE6E6] p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Need Immediate Support?</h3>
            <p className="text-gray-600 mb-4">
              If you're in crisis or need immediate help, don't wait for a scheduled session.
            </p>
            <Link href="/emergency">
              <Button className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white px-6 py-3 rounded-full">
                Get Emergency Help Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

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
                About Us
              </Link>
              <Link href="/counseling" className="text-gray-700 hover:text-[#5BA4CF] transition-colors">
                Counseling
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-[#5BA4CF] transition-colors">
                Resources
              </Link>
              <Link
                href="/emergency"
                className="bg-[#FFE6E6] text-[#5BA4CF] px-4 py-2 rounded-full hover:bg-[#FFE6E6]/80 transition-colors"
              >
                Emergency Help
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
              You are not alone. We believe you. Your story matters. This is a safe space where you can speak freely and
              find the support you deserve.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/report">
              <Button className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white px-8 py-4 text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
                Start Telling Your Story
              </Button>
            </Link>
            <Link href="/emergency">
              <Button
                variant="outline"
                className="border-[#FFE6E6] text-[#5BA4CF] hover:bg-[#FFE6E6] px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                Need Help Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How We Can Help You</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-[#A3CFF2]/20 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#D6ECFA] rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-[#5BA4CF]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Anonymous Reporting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Share your story safely and anonymously. You control what you share and when you share it.
                </p>
                <Link href="/report">
                  <Button variant="ghost" className="mt-4 text-[#5BA4CF] hover:bg-[#D6ECFA]">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-[#A3CFF2]/20 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#D6ECFA] rounded-full flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-[#5BA4CF]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Counseling</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with trained counselors who understand trauma and can provide the support you need.
                </p>
                <Link href="/counseling">
                  <Button variant="ghost" className="mt-4 text-[#5BA4CF] hover:bg-[#D6ECFA]">
                    Find Support
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-[#A3CFF2]/20 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#D6ECFA] rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-[#5BA4CF]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Educational Resources</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access helpful information about healing, your rights, and how to support yourself and others.
                </p>
                <Link href="/resources">
                  <Button variant="ghost" className="mt-4 text-[#5BA4CF] hover:bg-[#D6ECFA]">
                    Explore Resources
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">You Are Brave. You Are Strong.</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Taking the first step to seek help takes incredible courage. We're here to walk alongside you on your
            journey to healing. Every story shared helps create a safer world for all children.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <Button
                variant="outline"
                className="border-[#5BA4CF] text-[#5BA4CF] hover:bg-[#5BA4CF] hover:text-white px-6 py-3 rounded-full"
              >
                Learn About Our Mission
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Need Immediate Help?</h3>
              <p className="text-gray-600">Crisis support is available 24/7. You don't have to face this alone.</p>
            </div>
            <Link href="/emergency">
              <Button className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white px-6 py-3 rounded-full flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Get Help Now
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
                A digital sanctuary providing safe, supportive space for young survivors of sexual violence.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/report" className="text-gray-600 hover:text-[#5BA4CF]">
                    Anonymous Reporting
                  </Link>
                </li>
                <li>
                  <Link href="/counseling" className="text-gray-600 hover:text-[#5BA4CF]">
                    Counseling Services
                  </Link>
                </li>
                <li>
                  <Link href="/emergency" className="text-gray-600 hover:text-[#5BA4CF]">
                    Emergency Help
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/resources" className="text-gray-600 hover:text-[#5BA4CF]">
                    Educational Content
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-[#5BA4CF]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-[#5BA4CF]">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Crisis Hotlines</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-600">National: 119</li>
                <li className="text-gray-600">Child Protection: 129</li>
                <li className="text-gray-600">Women's Crisis: 021-7270005</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#A3CFF2]/20 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              © 2024 Peluk untuk Pelik. All rights reserved. Your privacy and safety are our priority.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

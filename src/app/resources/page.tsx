import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Search, Heart, Users, Scale, Shield, Clock, Download } from "lucide-react"
import Link from "next/link"

const resourceCategories = [
  {
    title: "Understanding Trauma",
    icon: Heart,
    color: "bg-[#D6ECFA]",
    articles: [
      {
        title: "What is Trauma? A Guide for Young People",
        description: "Understanding what trauma is and how it affects your mind and body",
        readTime: "5 min read",
        type: "Article",
      },
      {
        title: "Healing is Possible: Your Journey Forward",
        description: "Hope and encouragement for survivors on their path to recovery",
        readTime: "7 min read",
        type: "Article",
      },
      {
        title: "Common Reactions to Trauma",
        description: "Normal responses to traumatic experiences and when to seek help",
        readTime: "6 min read",
        type: "Article",
      },
    ],
  },
  {
    title: "Self-Care & Coping",
    icon: Shield,
    color: "bg-[#FFE6E6]",
    articles: [
      {
        title: "Breathing Exercises for Anxiety",
        description: "Simple techniques to help calm your mind and body",
        readTime: "3 min read",
        type: "Video",
      },
      {
        title: "Creating a Safety Plan",
        description: "Steps to help you feel safer and more in control",
        readTime: "8 min read",
        type: "Guide",
      },
      {
        title: "Grounding Techniques",
        description: "Ways to stay present when feeling overwhelmed",
        readTime: "4 min read",
        type: "Article",
      },
    ],
  },
  {
    title: "Know Your Rights",
    icon: Scale,
    color: "bg-[#E7DFFF]",
    articles: [
      {
        title: "Your Legal Rights as a Survivor",
        description: "Understanding your rights and legal protections",
        readTime: "10 min read",
        type: "Guide",
      },
      {
        title: "Reporting Options Explained",
        description: "Different ways to report abuse and what to expect",
        readTime: "8 min read",
        type: "Article",
      },
      {
        title: "Working with Law Enforcement",
        description: "What happens when you report to police",
        readTime: "6 min read",
        type: "Guide",
      },
    ],
  },
  {
    title: "Supporting Others",
    icon: Users,
    color: "bg-[#D6ECFA]",
    articles: [
      {
        title: "How to Support a Friend Who's Been Hurt",
        description: "Being there for someone who has experienced abuse",
        readTime: "7 min read",
        type: "Article",
      },
      {
        title: "For Parents: Supporting Your Child",
        description: "How families can help in the healing process",
        readTime: "12 min read",
        type: "Guide",
      },
      {
        title: "Creating Safe Spaces",
        description: "Building environments where survivors feel supported",
        readTime: "5 min read",
        type: "Article",
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Educational Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Knowledge is empowering. Explore articles, guides, and videos designed to help you understand trauma, know
            your rights, and support your healing journey.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for resources, topics, or questions..."
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
                        Read More →
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
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Helpful Downloads</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-[#A3CFF2]/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D6ECFA] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Download className="h-6 w-6 text-[#5BA4CF]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">Safety Planning Worksheet</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      A step-by-step guide to creating your personal safety plan
                    </p>
                    <Button size="sm" className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white">
                      Download PDF
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
                    <h3 className="font-semibold text-gray-800 mb-2">Self-Care Checklist</h3>
                    <p className="text-gray-600 text-sm mb-3">Daily and weekly activities to support your wellbeing</p>
                    <Button size="sm" className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white">
                      Download PDF
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
            <h3 className="text-xl font-bold text-gray-800 mb-4">Need More Support?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Learning about trauma and healing is an important step, but you don't have to navigate this journey alone.
              Professional support is available whenever you're ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/counseling">
                <Button className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white px-6 py-3 rounded-full">
                  Talk to a Counselor
                </Button>
              </Link>
              <Link href="/report">
                <Button
                  variant="outline"
                  className="border-[#5BA4CF] text-[#5BA4CF] hover:bg-[#D6ECFA] px-6 py-3 rounded-full"
                >
                  Share Your Story
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Reminder */}
        <div className="mt-8 text-center">
          <div className="bg-[#FFE6E6] p-4 rounded-lg">
            <p className="text-gray-700 mb-2">
              <strong>Remember:</strong> If you need immediate help, crisis support is available 24/7.
            </p>
            <Link href="/emergency">
              <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 rounded-full">
                Get Emergency Help
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

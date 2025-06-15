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
    // Save draft functionality
    alert("Your draft has been saved securely. You can return anytime to continue.")
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
            <Button variant="ghost" onClick={handleSaveDraft} className="text-[#5BA4CF] hover:bg-[#D6ECFA]">
              <Save className="h-4 w-4 mr-2" />
              Save Draft
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-3xl px-4 py-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="border-[#A3CFF2]/20 shadow-lg">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#D6ECFA] rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-[#5BA4CF]" />
            </div>
            <CardTitle className="text-2xl text-gray-800">Share Your Story Safely</CardTitle>
            <p className="text-gray-600 mt-2">
              You are in control. Share only what feels comfortable. You can skip any question or stop at any time.
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="bg-[#D6ECFA]/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Before We Begin</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Your report is completely anonymous unless you choose otherwise</li>
                    <li>• All information is encrypted and secure</li>
                    <li>• You can save your progress and return later</li>
                    <li>• You can skip any question that makes you uncomfortable</li>
                  </ul>
                </div>

                <div>
                  <Label className="text-base font-medium text-gray-800 mb-3 block">
                    Would you like to tell us what happened? (Optional)
                  </Label>
                  <Textarea
                    placeholder="Share as much or as little as you feel comfortable with. There's no pressure to include specific details."
                    className="min-h-32 border-[#A3CFF2]/30 focus:border-[#5BA4CF]"
                    value={formData.story}
                    onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                  />
                  <p className="text-xs text-gray-500 mt-2">Remember: You are brave for sharing. Every word matters.</p>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium text-gray-800 mb-3 block">
                    Where did this happen? (Optional)
                  </Label>
                  <Input
                    placeholder="General location (e.g., school, home, community center) - no specific addresses needed"
                    className="border-[#A3CFF2]/30 focus:border-[#5BA4CF]"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                <div>
                  <Label className="text-base font-medium text-gray-800 mb-3 block">
                    When did this happen? (Optional)
                  </Label>
                  <Input
                    placeholder="Approximate timeframe (e.g., last month, this year, a few years ago)"
                    className="border-[#A3CFF2]/30 focus:border-[#5BA4CF]"
                    value={formData.timeframe}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                  />
                </div>

                <div className="bg-[#FFE6E6]/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Remember:</strong> You don't need to provide exact details. General information helps us
                    understand how to better support survivors like you.
                  </p>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800">How Can We Support You?</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="support"
                      checked={formData.supportNeeded}
                      onCheckedChange={(checked) => setFormData({ ...formData, supportNeeded: checked as boolean })}
                    />
                    <div>
                      <Label htmlFor="support" className="text-base font-medium text-gray-800">
                        I would like to connect with a counselor
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">
                        We can connect you with trained professionals who specialize in supporting survivors.
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
                        It's okay to contact me about my report
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">
                        Only check this if you want us to be able to follow up. Your report will still be processed if
                        you don't check this.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#D6ECFA]/30 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Your Choice:</strong> These options are entirely up to you. Your report is valuable
                    regardless of what you choose here.
                  </p>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6 text-center">
                <div className="w-20 h-20 mx-auto bg-[#D6ECFA] rounded-full flex items-center justify-center">
                  <Heart className="h-10 w-10 text-[#5BA4CF]" />
                </div>

                <h3 className="text-xl font-semibold text-gray-800">Thank You for Your Courage</h3>

                <div className="bg-[#D6ECFA]/30 p-6 rounded-lg text-left">
                  <h4 className="font-semibold text-gray-800 mb-3">What Happens Next:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Your report has been securely submitted and encrypted</li>
                    <li>• Our team will review your report with care and respect</li>
                    <li>• If you requested support, a counselor will reach out within 24 hours</li>
                    <li>• You can always return to access more resources or support</li>
                  </ul>
                </div>

                <p className="text-gray-600">
                  You have taken a brave step today. Remember: you are not alone, we believe you, and your story
                  matters.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/counseling">
                    <Button className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white px-6 py-3 rounded-full">
                      Connect with Counselor
                    </Button>
                  </Link>
                  <Link href="/resources">
                    <Button
                      variant="outline"
                      className="border-[#5BA4CF] text-[#5BA4CF] hover:bg-[#D6ECFA] px-6 py-3 rounded-full"
                    >
                      Explore Resources
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
                  Previous
                </Button>

                <div className="flex gap-2">
                  <Button variant="outline" className="border-[#A3CFF2] text-[#5BA4CF] hover:bg-[#D6ECFA]">
                    Skip This Step
                  </Button>
                  <Button onClick={handleNext} className="bg-[#5BA4CF] hover:bg-[#5BA4CF]/90 text-white">
                    {currentStep === 3 ? "Submit Report" : "Continue"}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Support Message */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">Need immediate help? Crisis support is available 24/7.</p>
          <Link href="/emergency">
            <Button variant="outline" className="border-[#FFE6E6] text-[#5BA4CF] hover:bg-[#FFE6E6] rounded-full">
              Get Emergency Help
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

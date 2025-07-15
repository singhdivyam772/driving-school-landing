import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, CheckCircle, ArrowLeft, Star, Clock, Users, Shield, Award, Target, Zap } from "lucide-react"
import Link from "next/link"

export default function PlansPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <Link className="flex items-center justify-center" href="/">
          <div className="relative">
            <Car className="h-8 w-8 text-blue-600 animate-pulse" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"></div>
          </div>
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            DriveAce Academy
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105"
            href="/#about"
          >
            About
          </Link>
          <Link className="text-sm font-medium text-blue-600 font-semibold" href="/plans">
            Plans
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105"
            href="/#testimonials"
          >
            Reviews
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105"
            href="/#contact"
          >
            Contact
          </Link>
          <Link href="/login">
            <Button
              variant="outline"
              size="sm"
              className="hover:scale-105 transition-transform duration-200 bg-transparent"
            >
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200"
            >
              Sign Up
            </Button>
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
              <Link
                href="/"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 mb-4"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Choose Your Perfect Plan
                </h1>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive driving packages designed to get you road-ready. All plans include theory preparation,
                  practical lessons, and ongoing support.
                </p>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600 animate-fade-in-up delay-200">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse" />
                  <span className="font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span>2000+ Graduates</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="h-4 w-4 text-purple-600" />
                  <span>95% Pass Rate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-3 md:gap-8">
              {/* Basic Plan */}
              <Card className="relative hover:scale-105 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-white to-blue-50/50 animate-fade-in-up delay-100">
                <CardHeader className="text-center pb-8">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-fit">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Basic Package
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Perfect for beginners who want to learn the fundamentals
                  </CardDescription>
                  <div className="text-center pt-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      $299
                    </span>
                    <span className="text-gray-600 text-lg">/package</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">What's Included:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>10 Practical Lessons (45 minutes each)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>Theory Test Preparation Materials</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>Highway Driving Practice</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>Basic Parking Skills Training</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>Progress Tracking & Feedback</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                    <p className="text-gray-600 text-sm">
                      New drivers who want to learn essential skills and build confidence on the road.
                    </p>
                  </div>
                  <Link href="/plans/basic">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105">
                      Choose Basic Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Standard Plan */}
              <Card className="relative border-blue-200 border-2 hover:scale-105 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-white to-purple-50/50 animate-fade-in-up delay-200">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 animate-pulse">
                  🏆 Most Popular
                </Badge>
                <CardHeader className="text-center pb-8 pt-8">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Standard Package
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Comprehensive learning experience with extra support
                  </CardDescription>
                  <div className="text-center pt-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      $499
                    </span>
                    <span className="text-gray-600 text-lg">/package</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">What's Included:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>20 Practical Lessons (45 minutes each)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>Complete Theory Test Course</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>Highway & City Driving Practice</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>Advanced Parking Skills (Parallel & Reverse)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>Mock Road Test Session</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>Pick-up & Drop-off Service</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>24/7 Instructor Support</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                    <p className="text-gray-600 text-sm">
                      Students who want comprehensive training with personalized attention and convenience features.
                    </p>
                  </div>
                  <Link href="/plans/standard">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105">
                      Choose Standard Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="relative hover:scale-105 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-white to-green-50/50 animate-fade-in-up delay-300">
                <CardHeader className="text-center pb-8">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-fit">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Premium Package
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Complete mastery program with guaranteed results
                  </CardDescription>
                  <div className="text-center pt-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      $799
                    </span>
                    <span className="text-gray-600 text-lg">/package</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">What's Included:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>35 Practical Lessons (45 minutes each)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>Complete Theory Course + Practice Tests</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>All Driving Environments (City, Highway, Rural)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>Defensive Driving Course</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>Multiple Mock Road Tests</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>Night Driving Training</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>Weather Condition Training</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>Premium Vehicle Access</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Zap className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                        <span className="font-semibold text-green-700">Pass Guarantee or Full Refund</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                    <p className="text-gray-600 text-sm">
                      Serious learners who want to become expert drivers with comprehensive training and guaranteed
                      success.
                    </p>
                  </div>
                  <Link href="/plans/premium">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-300 hover:scale-105">
                      Choose Premium Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Comparison Section */}
            <div className="mt-16 animate-fade-in-up delay-400">
              <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Compare All Plans
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-50 to-purple-50">
                      <th className="text-left p-4 font-semibold">Features</th>
                      <th className="text-center p-4 font-semibold text-blue-600">Basic</th>
                      <th className="text-center p-4 font-semibold text-purple-600">Standard</th>
                      <th className="text-center p-4 font-semibold text-green-600">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t hover:bg-gray-50 transition-colors duration-200">
                      <td className="p-4">Practical Lessons</td>
                      <td className="text-center p-4">10</td>
                      <td className="text-center p-4">20</td>
                      <td className="text-center p-4">35</td>
                    </tr>
                    <tr className="border-t hover:bg-gray-50 transition-colors duration-200">
                      <td className="p-4">Theory Preparation</td>
                      <td className="text-center p-4">
                        <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="text-center p-4">
                        <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="text-center p-4">
                        <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-t hover:bg-gray-50 transition-colors duration-200">
                      <td className="p-4">Mock Road Tests</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">1</td>
                      <td className="text-center p-4">Multiple</td>
                    </tr>
                    <tr className="border-t hover:bg-gray-50 transition-colors duration-200">
                      <td className="p-4">Pick-up Service</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">
                        <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="text-center p-4">
                        <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-t hover:bg-gray-50 transition-colors duration-200">
                      <td className="p-4">Defensive Driving</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">
                        <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-t hover:bg-gray-50 transition-colors duration-200">
                      <td className="p-4">Pass Guarantee</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">
                        <Zap className="h-5 w-5 text-yellow-500 mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center animate-fade-in-up delay-500">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  Still Not Sure Which Plan is Right for You?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Our driving experts are here to help you choose the perfect package based on your experience level,
                  goals, and schedule.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300"
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    Book Free Consultation
                  </Button>
                  <Link href="/#contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="hover:scale-105 transition-all duration-300 bg-transparent"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gradient-to-r from-gray-50 to-blue-50/50">
        <p className="text-xs text-gray-600">© 2024 DriveAce Academy. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            href="#"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            href="#"
          >
            Refund Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

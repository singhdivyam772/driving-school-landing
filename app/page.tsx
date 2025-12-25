import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Car,
  Shield,
  Clock,
  Users,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Award,
  Target,
  BookOpen,
  ArrowRight,
  Zap,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function DrivingSchoolLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 animate-fade-in-up">
                <div className="space-y-2">
                  <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 transition-all duration-300 animate-bounce">
                    🏆 #1 Driving School in the City
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                    Learn to Drive with Confidence
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl animate-fade-in-up delay-200">
                    Professional driving instruction with certified instructors.
                    Get your license faster with our proven teaching methods and
                    flexible scheduling.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in-up delay-300">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Zap className="mr-2 h-4 w-4" />
                    Book Free Trial Lesson
                  </Button>
                  <Link href="/plans">
                    <Button
                      variant="outline"
                      size="lg"
                      className="hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 bg-transparent"
                    >
                      View Our Plans
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 animate-fade-in-up delay-400">
                  <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-200">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse" />
                    <span className="font-medium">4.9/5</span>
                  </div>
                  <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-200">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span>2000+ Students Passed</span>
                  </div>
                  <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-200">
                    <Award className="h-4 w-4 text-purple-600" />
                    <span>95% Pass Rate</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center animate-fade-in-right">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl blur-2xl animate-pulse"></div>
                  <Image
                    alt="Professional driving instructor teaching student in modern car"
                    className="aspect-square overflow-hidden rounded-xl object-cover shadow-2xl hover:scale-105 transition-transform duration-500 relative z-10"
                    height="550"
                    src="/placeholder.svg?height=550&width=550"
                    width="550"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  Why Choose DriveAce Academy?
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide comprehensive driving education with modern
                  vehicles, experienced instructors, and flexible scheduling to
                  fit your lifestyle.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white to-blue-50/50 animate-fade-in-up delay-100">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-fit">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Certified Instructors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    All our instructors are certified professionals with years
                    of experience and excellent safety records.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white to-purple-50/50 animate-fade-in-up delay-200">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Flexible Scheduling
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Book lessons at your convenience with our flexible
                    scheduling system. Evening and weekend slots available.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white to-green-50/50 animate-fade-in-up delay-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-fit">
                    <Car className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Modern Vehicles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Learn in our fleet of modern, well-maintained vehicles
                    equipped with dual controls for maximum safety.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Plans Preview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
                  Choose Your Learning Plan
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Flexible packages designed to meet your needs and budget. All
                  plans include theory and practical lessons.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-3 md:gap-8">
              {/* Basic Plan Preview */}
              <Card className="relative hover:scale-105 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-blue-50/50 animate-fade-in-up delay-100">
                <CardHeader>
                  <CardTitle className="text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Basic Package
                  </CardTitle>
                  <CardDescription className="text-center">
                    Perfect for beginners
                  </CardDescription>
                  <div className="text-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      $299
                    </span>
                    <span className="text-gray-600">/package</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>10 Practical Lessons</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Theory Test Preparation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Basic Parking Skills</span>
                    </li>
                  </ul>
                  <Link href="/plans/basic">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Standard Plan Preview */}
              <Card className="relative border-blue-200 border-2 hover:scale-105 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-purple-50/50 animate-fade-in-up delay-200">
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
                  Most Popular
                </Badge>
                <CardHeader>
                  <CardTitle className="text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Standard Package
                  </CardTitle>
                  <CardDescription className="text-center">
                    Comprehensive learning
                  </CardDescription>
                  <div className="text-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      $499
                    </span>
                    <span className="text-gray-600">/package</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>20 Practical Lessons</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Complete Theory Course</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Mock Road Test</span>
                    </li>
                  </ul>
                  <Link href="/plans/standard">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Premium Plan Preview */}
              <Card className="relative hover:scale-105 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-green-50/50 animate-fade-in-up delay-300">
                <CardHeader>
                  <CardTitle className="text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Premium Package
                  </CardTitle>
                  <CardDescription className="text-center">
                    Complete mastery
                  </CardDescription>
                  <div className="text-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      $799
                    </span>
                    <span className="text-gray-600">/package</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>35 Practical Lessons</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Guaranteed Pass</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Defensive Driving</span>
                    </li>
                  </ul>
                  <Link href="/plans/premium">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-300">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Link href="/plans">
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 bg-transparent"
                >
                  View All Plans & Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Customer Success Stories */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-gray-900 to-green-800 bg-clip-text text-transparent">
                  Success Stories
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Real stories from our students who achieved their driving
                  goals with DriveAce Academy.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up delay-100">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Image
                        alt="Sarah Johnson - Happy student who passed on first try"
                        className="rounded-full ring-2 ring-green-200"
                        height="60"
                        src="/placeholder.svg?height=60&width=60"
                        width="60"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-full">
                        <CheckCircle className="h-3 w-3" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                      <CardDescription className="text-green-600 font-medium">
                        Passed on First Try
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <Target className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">
                        Goal: Get license for new job
                      </span>
                    </div>
                    <p className="text-gray-600">
                      "I needed my license quickly for a new job opportunity.
                      The instructors were patient and thorough. I passed my
                      road test on the first attempt after just 3 weeks of
                      lessons!"
                    </p>
                    <div className="flex items-center gap-1 pt-2">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">
                        Standard Package
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up delay-200">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Image
                        alt="Mike Chen - Student who overcame driving anxiety"
                        className="rounded-full ring-2 ring-blue-200"
                        height="60"
                        src="/placeholder.svg?height=60&width=60"
                        width="60"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-full">
                        <Shield className="h-3 w-3" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Mike Chen</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">
                        Overcame Driving Anxiety
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <Target className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">
                        Goal: Overcome fear of driving
                      </span>
                    </div>
                    <p className="text-gray-600">
                      "I was terrified of driving after a minor accident years
                      ago. The instructors were incredibly understanding and
                      helped me build confidence gradually. Now I drive
                      everywhere!"
                    </p>
                    <div className="flex items-center gap-1 pt-2">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">
                        Premium Package
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up delay-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Image
                        alt="Emma Rodriguez - Teen driver success story"
                        className="rounded-full ring-2 ring-purple-200"
                        height="60"
                        src="/placeholder.svg?height=60&width=60"
                        width="60"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-purple-500 text-white p-1 rounded-full">
                        <Star className="h-3 w-3" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Emma Rodriguez</CardTitle>
                      <CardDescription className="text-purple-600 font-medium">
                        Teen Driver Success
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <Target className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">
                        Goal: Get license at 16
                      </span>
                    </div>
                    <p className="text-gray-600">
                      "As a teenager, I was eager but nervous about driving. The
                      instructors made learning fun and safe. I got my license
                      right after my 16th birthday and my parents trust my
                      driving skills!"
                    </p>
                    <div className="flex items-center gap-1 pt-2">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">
                        Standard Package
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  What Our Students Say
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our satisfied
                  students have to say about their experience.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:scale-105 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-yellow-50/50 animate-fade-in-up delay-100">
                <CardHeader>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <CardTitle className="text-lg bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    Excellent Instruction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    "The best driving school in town! My instructor was patient,
                    knowledgeable, and made me feel comfortable behind the
                    wheel. Highly recommended!"
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      alt="Alex Thompson - Satisfied student"
                      className="rounded-full ring-2 ring-yellow-200"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                    />
                    <div>
                      <p className="font-medium">Alex Thompson</p>
                      <p className="text-sm text-gray-600">Passed in 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:scale-105 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-blue-50/50 animate-fade-in-up delay-200">
                <CardHeader>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <CardTitle className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Professional Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    "From booking to passing my test, everything was smooth and
                    professional. The flexible scheduling really helped with my
                    busy work schedule."
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      alt="Jessica Lee - Professional student"
                      className="rounded-full ring-2 ring-blue-200"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                    />
                    <div>
                      <p className="font-medium">Jessica Lee</p>
                      <p className="text-sm text-gray-600">Passed in 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:scale-105 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-green-50/50 animate-fade-in-up delay-300">
                <CardHeader>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <CardTitle className="text-lg bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Great Value
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    "Compared to other schools, DriveAce offers the best value
                    for money. Quality instruction at reasonable prices. Worth
                    every penny!"
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      alt="David Wilson - Value-conscious student"
                      className="rounded-full ring-2 ring-green-200"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                    />
                    <div>
                      <p className="font-medium">David Wilson</p>
                      <p className="text-sm text-gray-600">Passed in 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4 animate-fade-in-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  Get Started Today
                </h2>
                <p className="text-gray-600 md:text-xl/relaxed">
                  Ready to start your driving journey? Contact us to book your
                  first lesson or ask any questions you might have.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                      <Mail className="h-4 w-4 text-white" />
                    </div>
                    <span>info@driveaceacademy.com</span>
                  </div>
                  <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <span>123 Main Street, Your City, State 12345</span>
                  </div>
                </div>
              </div>
              <Card className="hover:scale-105 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-blue-50/50 animate-fade-in-right">
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Send us a message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium"
                      >
                        First name
                      </label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                        className="transition-all duration-200 focus:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium"
                      >
                        Last name
                      </label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                        className="transition-all duration-200 focus:scale-105"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      type="tel"
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your driving goals or ask any questions"
                      rows={4}
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

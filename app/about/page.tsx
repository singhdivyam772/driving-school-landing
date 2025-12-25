import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  Target,
  BookOpen,
  ArrowRight,
  Heart,
  CheckCircle,
  Star,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "John Mitchell",
      role: "Founder & Lead Instructor",
      image: "/professional-male-instructor.png",
      bio: "20+ years of driving instruction experience",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Curriculum",
      image: "/instructor-laura.png",
      bio: "Expert in defensive driving techniques",
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      image: "/professional-male-manager.jpg",
      bio: "Ensures smooth scheduling and excellence",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Student Safety",
      description: "Your safety is our top priority in every lesson",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We aim for the highest quality instruction",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive learning environment",
      color: "from-green-500 to-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuous improvement in our methods and services",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const achievements = [
    {
      number: "2000+",
      label: "Students Graduated",
      icon: Users,
    },
    {
      number: "95%",
      label: "First Attempt Pass Rate",
      icon: Award,
    },
    {
      number: "15+",
      label: "Years in Business",
      icon: BookOpen,
    },
    {
      number: "4.9/5",
      label: "Average Rating",
      icon: Star,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4 max-w-3xl">
                <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 transition-all duration-300 mx-auto">
                  🎓 Learn Our Story
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  About Rajesh Motor Training School
                </h1>
                <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl">
                  Transforming lives through professional driving education.
                  We're committed to creating safe, confident drivers with
                  personalized instruction and modern teaching methods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl blur-2xl animate-pulse"></div>
                  <Image
                    alt="Rajesh Motor Training School modern driving school facility"
                    className="aspect-square overflow-hidden rounded-xl object-cover shadow-2xl hover:scale-105 transition-transform duration-500 relative z-10"
                    height={500}
                    src="/modern-driving-school.png"
                    width={500}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                    Our Mission
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To provide exceptional driving instruction that empowers
                    individuals to become safe, confident, and responsible
                    drivers. We believe every person deserves quality education
                    and personal attention to achieve their driving goals.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
                    Our Vision
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To be the leading driving academy in the region, recognized
                    for our commitment to safety, excellence, and student
                    success. We envision a community of confident drivers who
                    passed on our first attempt and continue to drive safely for
                    years to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-lg">
                These principles guide everything we do
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="border-2 hover:border-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white to-blue-50/50"
                  >
                    <CardHeader>
                      <div
                        className={`mx-auto mb-4 p-3 bg-gradient-to-r ${value.color} rounded-full w-fit`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-center text-xl">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
                Our Track Record
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-lg">
                Proven results backed by years of excellence
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-blue-50/50 rounded-lg p-6 border-2 border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {achievement.number}
                    </div>
                    <p className="text-gray-600 font-medium">
                      {achievement.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Meet Our Expert Team
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-lg">
                Dedicated professionals committed to your success
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white to-purple-50/50 overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      height={300}
                      src={member.image || "/placeholder.svg"}
                      width={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-purple-700 font-semibold">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
                Why Choose Rajesh Motor Training School?
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-lg">
                What sets us apart from other driving schools
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {[
                {
                  title: "Expert Instructors",
                  description:
                    "All certified and trained in the latest teaching methods",
                  icon: Award,
                },
                {
                  title: "Personalized Learning",
                  description:
                    "Customized lesson plans based on your pace and needs",
                  icon: Target,
                },
                {
                  title: "Modern Fleet",
                  description:
                    "Well-maintained vehicles equipped with dual controls",
                  icon: CheckCircle,
                },
                {
                  title: "Flexible Scheduling",
                  description: "Book lessons at times that work best for you",
                  icon: BookOpen,
                },
                {
                  title: "Comprehensive Curriculum",
                  description:
                    "Theory, practical, and mock test preparation included",
                  icon: TrendingUp,
                },
                {
                  title: "High Success Rate",
                  description: "95% first attempt pass rate speaks for itself",
                  icon: Star,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="border-2 hover:border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-white to-green-50/50"
                  >
                    <CardHeader>
                      <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-fit mb-3">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  Ready to Start Your Journey?
                </h2>
                <p className="max-w-[600px] mx-auto text-blue-100 md:text-lg">
                  Join thousands of successful drivers who learned with DriveAce
                  Academy. Book your free trial lesson today!
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                >
                  Book Free Lesson
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

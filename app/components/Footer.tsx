import React from "react";
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
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <svg
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Rajesh Motor Training School
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Professional driving instruction for confident drivers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/plans"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Our Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/plans"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Driving Lessons
                </Link>
              </li>
              <li>
                <Link
                  href="/plans"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Theory Training
                </Link>
              </li>
              <li>
                <Link
                  href="/plans"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Mock Tests
                </Link>
              </li>
              <li>
                <Link
                  href="/plans"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Refresher Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-white">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 hover:text-blue-400 transition-colors duration-200">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 hover:text-blue-400 transition-colors duration-200">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-500" />
                <span>info@driveaceacademy.com</span>
              </li>
              <li className="flex items-start gap-3 hover:text-blue-400 transition-colors duration-200">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-500" />
                <span>123 Drive Street, City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2025 Rajesh Motor Training School. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

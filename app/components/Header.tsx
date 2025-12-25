"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/plans", label: "Plans" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="px-4 lg:px-6 h-16 flex border border-blue-500 items-center border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <Link className="flex items-center justify-center" href="/">
        <div className="relative">
          <svg
            className="h-8 w-8 text-blue-600"
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
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"></div>
        </div>
        <span className="ml-2 text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Rajesh Motor Training School
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex ml-auto items-center gap-4 sm:gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            className="text-sm font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
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

      {/* Mobile Menu Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden ml-auto">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64 bg-white">
          <SheetHeader>
            <SheetTitle className="text-left">Navigation</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <SheetClose key={link.href} asChild>
                <Link
                  href={link.href}
                  className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors py-2 px-3 rounded-md hover:bg-blue-50"
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
            <div className="border-t pt-4 mt-4 flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/login" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full hover:bg-gray-100 bg-transparent"
                  >
                    Login
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/signup" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;

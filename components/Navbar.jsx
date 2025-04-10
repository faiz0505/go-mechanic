"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, Car, MapPin, Crosshair } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import { locations } from "@/utils/dummyData";
import { SlidersHorizontal } from "lucide-react";
import Modal from "./ui/Modal";
import LocationCarSelector from "./LocationCarSelector";
import LoginSidebar from "./LoginSidebar";
// Sample more menu items
const moreItems = [
  { label: "FAQ", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms", href: "/terms-and-conditions" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Offers", href: "/offers" },
  { label: "Reviews", href: "/reviews" },
];

export default function Navbar() {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  // Load city from localStorage when the component mounts
  useEffect(() => {
    const storedCity = localStorage.getItem("location");
    if (storedCity) {
      setSelectedCity(storedCity);
    }
  }, []);

  // Function to handle city selection
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    localStorage.setItem("location", city);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-lavender">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Car className="h-8 w-8 text-deep-purple" />
            <span className="text-xl font-bold text-deep-purple">
              GoMechanic
            </span>
          </Link>

          {/* City Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-2 cursor-pointer">
                  <MapPin className="w-4 h-4" />
                  {selectedCity ? selectedCity : "Location"}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid md:grid-cols-2 w-36 md:w-80 gap-2 p-4">
                    {locations.map((location, i) => (
                      <li key={i}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start transition-colors hover:bg-accent hover:text-accent-foreground"
                          onClick={() => handleCitySelect(location)}
                        >
                          {location}
                        </Button>
                      </li>
                    ))}
                    <li className="col-span-full">
                      <Button className="w-full flex items-center justify-center gap-2 text-sm">
                        <Crosshair className="w-4 h-4" />
                        Detect My Location
                      </Button>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 sm:flex">
          <Link
            href="/blog"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Blog
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 px-2">
                More
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {moreItems.map((item) => (
                <DropdownMenuItem key={item.label} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/cart"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Cart
          </Link>
          <Button
            onClick={() => setOpenDrawer(true)}
            className="rounded-4xl py-4 px-8"
          >
            Login
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="sm:hidden">
              <Menu style={{ height: "28px", width: "28px" }} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 py-6">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Car className="h-8 w-8 text-deep-purple" />
                  <span className="text-xl font-bold text-deep-purple">
                    GoMechanic
                  </span>
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Link
                    href="/blog"
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <div className="text-sm font-medium text-muted-foreground">
                    More
                  </div>
                  {moreItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/cart">Cart</Link>
                </div>

                <Button
                  asChild
                  className="bg-lilac rounded-4xl text-center text-charcoal hover:bg-lavender py-4 px-8"
                >
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <LoginSidebar open={openDrawer} onOpenChange={setOpenDrawer} />
    </header>
  );
}

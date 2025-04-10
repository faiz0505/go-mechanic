'use client';

import { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X } from "lucide-react";
import Link from 'next/link';

const BlogHeader = () => {
  const [isAutoNewsOpen, setIsAutoNewsOpen] = useState(false);
  const [isFeaturedArticlesOpen, setIsFeaturedArticlesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full bg-charcoal ${isScrolled ? 'fixed top-0 left-0 z-50 shadow-lg backdrop-blur-sm' : ''} transition-all duration-300`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between py-4">
          {/* Left Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/blog" className="text-white font-roboto-condensed text-sm font-medium hover:text-red-600 transition-colors duration-200">
              Home
            </Link>
            
            {/* Auto News Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsAutoNewsOpen(true)}
              onMouseLeave={() => setIsAutoNewsOpen(false)}
            >
              <button className="text-white font-roboto-condensed text-sm flex items-center gap-1 hover:text-red-600 transition-colors duration-200">
                Auto News
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isAutoNewsOpen && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-md py-2 w-48 z-10 transition-opacity duration-200">
                  <Link href="/blog/latest-bike-news" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-red-600 transition-colors duration-200">
                    Latest Bike News
                  </Link>
                  <Link href="/blog/latest-car-news" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-red-600 transition-colors duration-200">
                    Latest Car News
                  </Link>
                  <Link href="/blog/electric-vehicles" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-red-600 transition-colors duration-200">
                    Electric Vehicles
                  </Link>
                </div>
              )}
            </div>

            {/* Featured Articles Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsFeaturedArticlesOpen(true)}
              onMouseLeave={() => setIsFeaturedArticlesOpen(false)}
            >
              <button className="text-white font-roboto-condensed text-sm flex items-center gap-1 hover:text-red-600 transition-colors duration-200">
                Featured Articles
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isFeaturedArticlesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-md py-2 w-48 z-10 transition-opacity duration-200">
                  <Link href="/blog/gomechanic-basics" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-red-600 transition-colors duration-200">
                    GoMechanic Basics
                  </Link>
                  <Link href="/blog/fun-reads" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-red-600 transition-colors duration-200">
                    GoMechanic Fun Reads
                  </Link>
                  <Link href="/blog/informative" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-red-600 transition-colors duration-200">
                    GoMechanic Informative
                  </Link>
                </div>
              )}
            </div>

            <Link href="/blog/car-accessories" className="text-white font-roboto-condensed text-sm font-medium hover:text-red-600 transition-colors duration-200">
              Car Accessories
            </Link>
            <Link href="/blog/videos" className="text-white font-roboto-condensed text-sm font-medium hover:text-red-600 transition-colors duration-200">
              GoMechanic Videos
            </Link>
          </div>

          {/* Search Form and CTA */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/#service"
              className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-roboto-condensed font-medium hover:bg-red-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Service Your Car
            </Link>
            <form className="flex items-center bg-gray-700/60 rounded-full px-4 py-2 focus-within:bg-gray-600 transition-colors duration-200">
              <input 
                type="text" 
                placeholder="Search"
                className="bg-transparent text-white placeholder-gray-300 outline-none w-48 text-sm"
              />
              <button type="submit" className="text-white ml-2 hover:text-red-400 transition-colors duration-200">
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            <Link href="/" className="text-white font-bold text-xl">
              GoMechanic
            </Link>
            
            <Link 
              href="/service"
              className="bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-red-700 transition-colors duration-200 shadow-md"
            >
              Service Car
            </Link>
          </div>

          {isMobileMenuOpen && (
            <div className="mt-4 transform-gpu transition-all duration-300 ease-in-out">
              <form className="flex items-center bg-gray-700/60 rounded-full px-4 py-2 mb-4 w-full">
                <input 
                  type="text" 
                  placeholder="Search"
                  className="bg-transparent text-white placeholder-gray-300 outline-none flex-1 text-sm"
                />
                <button type="submit" className="text-white ml-2">
                  <Search className="w-4 h-4" />
                </button>
              </form>

              <nav className="flex flex-col space-y-3 bg-gray-800/50 rounded-lg p-4">
                <Link href="/" className="text-white hover:text-red-500 transition-colors duration-200 py-1 font-medium">
                  Home
                </Link>
                
                <div className="border-b border-gray-700 my-1"></div>
                
                <div className="space-y-2">
                  <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">Auto News</p>
                  <Link href="/latest-bike-news" className="text-white hover:text-red-500 transition-colors duration-200 py-1 pl-2 block">
                    Latest Bike News
                  </Link>
                  <Link href="/latest-car-news" className="text-white hover:text-red-500 transition-colors duration-200 py-1 pl-2 block">
                    Latest Car News
                  </Link>
                  <Link href="/spy-shots" className="text-white hover:text-red-500 transition-colors duration-200 py-1 pl-2 block">
                    Latest Spy Shots
                  </Link>
                </div>
                
                <div className="border-b border-gray-700 my-1"></div>
                
                <div className="space-y-2">
                  <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">Featured Articles</p>
                  <Link href="/basics" className="text-white hover:text-red-500 transition-colors duration-200 py-1 pl-2 block">
                    GoMechanic Basics
                  </Link>
                  <Link href="/fun-reads" className="text-white hover:text-red-500 transition-colors duration-200 py-1 pl-2 block">
                    GoMechanic Fun Reads
                  </Link>
                  <Link href="/informative" className="text-white hover:text-red-500 transition-colors duration-200 py-1 pl-2 block">
                    GoMechanic Informative
                  </Link>
                </div>
                
                <div className="border-b border-gray-700 my-1"></div>
                
                <Link href="/accessories" className="text-white hover:text-red-500 transition-colors duration-200 py-1 font-medium">
                  Car Accessories
                </Link>
                <Link href="/videos" className="text-white hover:text-red-500 transition-colors duration-200 py-1 font-medium">
                  GoMechanic Videos
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import LanguageSelector from './LanguageSelector';
import { Menu, X } from "lucide-react";
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b z-50">
      <div className="container-custom py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-brand-blue text-2xl font-bold">Future</span>
            <span className="text-brand-orange text-2xl font-bold">Ready</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium text-gray-700 hover:text-brand-blue transition-colors">
            Home
          </Link>
          <Link to="/skills" className="font-medium text-gray-700 hover:text-brand-blue transition-colors">
            Skills Guide
          </Link>
          <Link to="/resources" className="font-medium text-gray-700 hover:text-brand-blue transition-colors">
            Resources
          </Link>
          <Link to="/roadmap" className="font-medium text-gray-700 hover:text-brand-blue transition-colors">
            Roadmaps
          </Link>
          <Link to="/about" className="font-medium text-gray-700 hover:text-brand-blue transition-colors">
            About
          </Link>
          <LanguageSelector />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSelector />
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden bg-white border-t",
        isMenuOpen ? "block" : "hidden"
      )}>
        <nav className="container-custom py-4 flex flex-col space-y-4">
          <Link 
            to="/" 
            className="px-2 py-2 font-medium text-gray-700 hover:text-brand-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/skills" 
            className="px-2 py-2 font-medium text-gray-700 hover:text-brand-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills Guide
          </Link>
          <Link 
            to="/resources" 
            className="px-2 py-2 font-medium text-gray-700 hover:text-brand-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Resources
          </Link>
          <Link 
            to="/roadmap" 
            className="px-2 py-2 font-medium text-gray-700 hover:text-brand-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Roadmaps
          </Link>
          <Link 
            to="/about" 
            className="px-2 py-2 font-medium text-gray-700 hover:text-brand-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

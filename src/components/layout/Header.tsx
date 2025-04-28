
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/products', label: 'Products & Order' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-gold-gradient">
              <Leaf size={24} className="text-white" />
            </div>
            <span className="font-bold text-xl md:text-2xl">
              <span className="text-greengold-green">Green</span>
              <span className="text-greengold-gold">Gold</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map(({ path, label }) => (
              <Link 
                key={path} 
                to={path}
                className={`font-medium transition-colors hover:text-greengold-green ${
                  location.pathname === path ? 'text-greengold-green' : 'text-gray-700'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {NAV_LINKS.map(({ path, label }) => (
              <Link 
                key={path} 
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium px-4 py-2 rounded-md transition-colors ${
                  location.pathname === path 
                    ? 'bg-gray-100 text-greengold-green' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-greengold-green'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;


import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, PhoneCall } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-10 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start max-w-xs">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl">
                <span className="text-greengold-green">Green</span>
                <span className="text-greengold-gold">Gold</span>
              </span>
            </Link>
            <p className="text-gray-600 text-center md:text-left">
              Transforming campus leaf litter into nutrient-rich natural manure for sustainable gardening and farming.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 hover:text-greengold-green transition-colors">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-greengold-green transition-colors">About</Link>
              <Link to="/products" className="text-gray-600 hover:text-greengold-green transition-colors">Products & Order</Link>
              <Link to="/faq" className="text-gray-600 hover:text-greengold-green transition-colors">FAQ</Link>
              <Link to="/contact" className="text-gray-600 hover:text-greengold-green transition-colors">Contact</Link>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:greengold@yourcollege.edu" 
                className="flex items-center space-x-2 text-gray-600 hover:text-greengold-green transition-colors"
              >
                <Mail size={18} />
                <span>greengold@yourcollege.edu</span>
              </a>
              <a 
                href="https://wa.me/91XXXXXXXXXX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-greengold-green transition-colors"
              >
                <PhoneCall size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} GreenGold. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

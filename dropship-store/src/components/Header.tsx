'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  Search, 
  User, 
  Heart,
  Menu,
  X
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="font-playfair font-bold text-xl text-gray-900">LuxeDrops</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors relative group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              className="p-2 text-gray-700 hover:text-gray-900 relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search size={20} />
            </motion.button>
            
            <motion.button
              className="p-2 text-gray-700 hover:text-gray-900 relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </motion.button>
            
            <motion.button
              className="p-2 text-gray-700 hover:text-gray-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <User size={20} />
            </motion.button>
            
            <motion.button
              className="p-2 text-gray-700 hover:text-gray-900 relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200 mt-2 pt-4 pb-4"
            >
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 font-medium px-2 py-1"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                <div className="flex items-center space-x-4 px-2 pt-4 border-t border-gray-200">
                  <button className="p-2 text-gray-700 hover:text-gray-900">
                    <Search size={20} />
                  </button>
                  <button className="p-2 text-gray-700 hover:text-gray-900 relative">
                    <Heart size={20} />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      2
                    </span>
                  </button>
                  <button className="p-2 text-gray-700 hover:text-gray-900">
                    <User size={20} />
                  </button>
                  <button className="p-2 text-gray-700 hover:text-gray-900 relative">
                    <ShoppingBag size={20} />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 text-white text-xs rounded-full flex items-center justify-center">
                      3
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
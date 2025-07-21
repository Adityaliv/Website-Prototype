'use client';

import { motion } from 'framer-motion';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Smart Fitness Watch",
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      reviews: 1247,
      image: "🎯",
      category: "Fitness",
      discount: 33,
      isNew: true
    },
    {
      id: 2,
      name: "Wireless Charging Pad",
      price: 49,
      originalPrice: 79,
      rating: 4.9,
      reviews: 892,
      image: "⚡",
      category: "Tech",
      discount: 38,
      isNew: false
    },
    {
      id: 3,
      name: "Premium Bluetooth Speaker",
      price: 129,
      originalPrice: 199,
      rating: 4.7,
      reviews: 2156,
      image: "🔊",
      category: "Audio",
      discount: 35,
      isNew: false
    },
    {
      id: 4,
      name: "Smart Home Hub",
      price: 89,
      originalPrice: 149,
      rating: 4.6,
      reviews: 756,
      image: "🏠",
      category: "Smart Home",
      discount: 40,
      isNew: true
    },
    {
      id: 5,
      name: "Portable Phone Stand",
      price: 29,
      originalPrice: 49,
      rating: 4.9,
      reviews: 3421,
      image: "📱",
      category: "Accessories",
      discount: 41,
      isNew: false
    },
    {
      id: 6,
      name: "LED Desk Lamp",
      price: 69,
      originalPrice: 99,
      rating: 4.8,
      reviews: 1876,
      image: "💡",
      category: "Home",
      discount: 30,
      isNew: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
            <span className="text-purple-600 font-medium text-sm">TRENDING NOW</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of premium products that are flying off the shelves
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              whileHover={{ y: -10 }}
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-6xl">{product.image}</div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <motion.button
                    className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart className="w-4 h-4 text-gray-600" />
                  </motion.button>
                  <motion.button
                    className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye className="w-4 h-4 text-gray-600" />
                  </motion.button>
                </div>

                {/* Quick Add Button */}
                <motion.button
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingCart className="w-4 h-4 mr-2 inline" />
                  Quick Add
                </motion.button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-purple-600 font-medium">{product.category}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                  </div>
                  
                  <motion.button
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <button className="btn-primary">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
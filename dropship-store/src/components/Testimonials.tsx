'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Blogger",
      avatar: "👩‍💼",
      rating: 5,
      text: "LuxeDrops has completely transformed my shopping experience. The quality of products is exceptional, and the delivery is always on time. I've never been disappointed!",
      location: "New York, USA"
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Tech Enthusiast",
      avatar: "👨‍💻",
      rating: 5,
      text: "As someone who's very particular about tech gadgets, I was impressed by the authenticity and quality of products from LuxeDrops. Their customer service is top-notch too!",
      location: "Singapore"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Fitness Trainer",
      avatar: "👩‍🏫",
      rating: 5,
      text: "I've ordered several fitness accessories from LuxeDrops and each one has exceeded my expectations. The packaging is beautiful and the products are exactly as described.",
      location: "Los Angeles, USA"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Small Business Owner",
      avatar: "👨‍💼",
      rating: 5,
      text: "LuxeDrops helped me find unique products for my store. Their wholesale prices are competitive and the quality is consistent. Highly recommended for fellow entrepreneurs!",
      location: "London, UK"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Interior Designer",
      avatar: "👩‍🎨",
      rating: 5,
      text: "The home decor items I've purchased from LuxeDrops have been absolutely stunning. They've added the perfect touch to my clients' spaces. Will definitely order again!",
      location: "Toronto, Canada"
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      role: "Student",
      avatar: "👨‍🎓",
      rating: 5,
      text: "As a student on a budget, I appreciate LuxeDrops' affordable prices without compromising on quality. The student discount program is a fantastic bonus!",
      location: "Dubai, UAE"
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
    <section className="section-padding bg-gradient-to-b from-white to-purple-50">
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
            <span className="text-purple-600 font-medium text-sm">CUSTOMER LOVE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied customers have to say about their experience
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                {/* Quote Icon */}
                <motion.div
                  className="absolute top-4 right-4 text-purple-200"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Quote className="w-8 h-8" />
                </motion.div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.1 * i,
                        type: "spring",
                        stiffness: 300
                      }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-purple-600 text-xs md:text-sm font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              { metric: "4.9/5", label: "Average Rating" },
              { metric: "50K+", label: "Reviews" },
              { metric: "98%", label: "Satisfied Customers" },
              { metric: "24hrs", label: "Response Time" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                  {item.metric}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
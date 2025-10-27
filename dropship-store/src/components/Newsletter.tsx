'use client';

import { motion } from 'framer-motion';
import { Mail, Gift, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Mail className="w-10 h-10 text-white" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-playfair font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Stay in the Loop
          </motion.h2>

          <motion.p
            className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Be the first to know about new arrivals, exclusive deals, and special offers. 
            Plus, get 15% off your first order when you subscribe!
          </motion.p>

          {/* Benefits */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {[
              { icon: "🎁", title: "Exclusive Deals", desc: "Member-only discounts up to 50% off" },
              { icon: "⚡", title: "Early Access", desc: "Be first to shop new collections" },
              { icon: "📱", title: "Style Tips", desc: "Weekly trends and styling advice" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-white/70 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Subscription Form */}
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
                <motion.div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Gift className="w-5 h-5 text-white/60" />
                </motion.div>
              </div>
              
              <motion.button
                className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            <motion.p
              className="text-white/60 text-sm mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              No spam, unsubscribe at any time. By subscribing, you agree to our{' '}
              <a href="#" className="text-white underline hover:no-underline">
                Privacy Policy
              </a>
            </motion.p>
          </motion.div>

          {/* Discount Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-3 rounded-full font-bold mt-8"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Gift className="w-5 h-5" />
            <span>Get 15% OFF Your First Order!</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
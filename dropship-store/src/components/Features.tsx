'use client';

import { motion } from 'framer-motion';
import { 
  Truck, 
  Shield, 
  RefreshCw, 
  Headphones,
  Globe,
  CreditCard
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Worldwide Shipping",
      description: "Enjoy free shipping on all orders over $50. Fast delivery to your doorstep anywhere in the world.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Your payment information is always safe with our advanced SSL encryption and trusted payment gateways.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: RefreshCw,
      title: "30-Day Returns",
      description: "Not satisfied? Return your purchase within 30 days for a full refund. No questions asked.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our dedicated customer support team is here to help you around the clock with any questions.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "We deliver to over 200 countries worldwide. Wherever you are, we'll get your order to you.",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: CreditCard,
      title: "Flexible Payments",
      description: "Pay your way with multiple payment options including credit cards, PayPal, and buy now, pay later.",
      color: "from-indigo-500 to-purple-500"
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
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-white rounded-full border border-gray-200 mb-4">
            <span className="text-gray-600 font-medium text-sm">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Premium Shopping Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing you with the best online shopping experience through our exceptional services
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-xl group-hover:scale-150 transition-all duration-500`} />
                
                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 relative z-10`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-200 rounded-3xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 p-8 bg-white rounded-3xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { number: "50K+", label: "Happy Customers" },
            { number: "200+", label: "Countries Served" },
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
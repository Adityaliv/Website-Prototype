'use client';

import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Star, 
  Truck, 
  Shield, 
  ArrowRight,
  Heart,
  Eye
} from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedProducts />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

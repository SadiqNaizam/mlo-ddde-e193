import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ParallaxHeroSection: React.FC = () => {
  console.log('ParallaxHeroSection loaded');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Create different transform ranges for parallax
  // Background moves slower (e.g., 50% of scroll distance)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  // Foreground text moves faster (e.g., 150% of scroll distance)
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '150%']);

  return (
    <section
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          y: backgroundY,
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      <motion.div
        style={{ y: textY }}
        className="relative z-20 text-center text-white p-4"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          A Symphony of Flavors
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-neutral-200">
          Discover a curated menu where culinary artistry meets the finest ingredients. An unforgettable dining experience, delivered to your door.
        </p>
        <Button asChild size="lg" className="bg-white text-black hover:bg-neutral-200 font-semibold text-lg py-6 px-8 rounded-full transition-transform duration-300 ease-in-out hover:scale-105">
          <Link to="/menu">
            Explore Our Menu
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default ParallaxHeroSection;
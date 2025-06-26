import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ParallaxHeroSection from '@/components/ParallaxHeroSection';
import FoodItemCard from '@/components/FoodItemCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Placeholder data for featured menu items
const featuredItems = [
  {
    id: 'item-1',
    name: 'Seared Scallops & Saffron Risotto',
    price: 32.50,
    imageUrl: 'https://images.unsplash.com/photo-1621852004136-6134b4a03a4a?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 'item-2',
    name: 'Wagyu Beef Burger with Truffle Aioli',
    price: 28.00,
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop',
  },
  {
    id: 'item-3',
    name: 'Truffle & Wild Mushroom Pappardelle',
    price: 25.00,
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e326e20f4423?q=80&w=2070&auto=format&fit=crop',
  },
];

const HomePage: React.FC = () => {
  console.log('HomePage loaded');

  return (
    <div className="bg-neutral-950 text-white">
      <Header />
      <main>
        {/* The Parallax Hero Section is the first thing users see */}
        <ParallaxHeroSection />

        {/* This section contains the brand philosophy and featured items */}
        <section className="container py-20 md:py-32">
          {/* Brand Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-primary">
              The Art of Dining, Redefined
            </h2>
            <p className="text-lg text-neutral-300">
              At CloudKitchen Luxe, we believe that dining is an art form. Our mission is to blend culinary passion with the finest seasonal ingredients to create dishes that are not only delicious but also a feast for the eyes, delivered with the care and elegance you deserve.
            </p>
          </motion.div>

          {/* Featured Menu Items */}
          <div className="mb-16">
            <h3 className="text-center text-2xl md:text-3xl font-bold tracking-tight mb-10">Our Featured Creations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredItems.map((item) => (
                <FoodItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl}
                />
              ))}
            </div>
          </div>

          {/* Call to Action to view the full menu */}
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="text-lg py-6 px-8 rounded-full border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 ease-in-out hover:scale-105">
              <Link to="/menu"> {/* Path from App.tsx */}
                View Full Menu
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;